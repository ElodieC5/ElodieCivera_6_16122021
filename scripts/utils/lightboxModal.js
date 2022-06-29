//  -------------------------------------------------------
//      Script to display the lightbox
//  -------------------------------------------------------


// waiting for all the container-media to be available prior to launch the lightbox
function init() {
	setTimeout(() => {
		// console.log(document.querySelector('.container-media'));
		myLightbox();
	}, 500);
};

let index;
let thumbnails;
init();

//  Open the lightbox through the selected media
//  -------------------------------------------------------

function myLightbox() {

	thumbnails = [...document.querySelectorAll(".media-thumbnail")];
	const cardsGallery = document.querySelectorAll(".container-media");

	// listen to the click event
	cardsGallery.forEach((card) => card.addEventListener("click", (e) => {
		const imageWrapper = e.target.closest(".media-thumbnail");
	 	index = thumbnails.indexOf(imageWrapper);

		showLightbox(imageWrapper);
	})
	);

	// listen to the keyup event
	cardsGallery.forEach((card) => card.addEventListener("keyup", (e) => {
		const imageWrapper = e.target.closest(".media-thumbnail");
		index = thumbnails.indexOf(imageWrapper);
		
		if (e.code === "Enter") {
			showLightbox(imageWrapper);
		};
	})
	);
}

//  Build the lightbox through the selected media
//  -------------------------------------------------------

function showLightbox(imageWrapper) {

	// check if user clicked either picture or movie through the media's wrapper
	if (imageWrapper) {
		const image = imageWrapper.querySelector(".photo");
		const video = imageWrapper.querySelector(".film");
		
		if (video) {
			document.getElementById("lightbox_modal").innerHTML = `
				<div class="icons">
				<img class="icons close" id="close" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" tabindex="0"/>

					<img class="icons previous" src="assets/icons/arrowLeft.svg" tabindex="0"/>
					<img class="icons next" src="assets/icons/arrowRight.svg" tabindex="0"/>
				</div>
                <div class="lightbox">
                    <iframe src="${video.src}" tabindex="0"></iframe>
                </div>
				<h2 tabindex="0">${video.getAttribute("aria-label")}</h2>
                `;
		};
		if (image) {	
			document.getElementById("lightbox_modal").innerHTML = `
                <div class="icons">
				<img class="icons close" id="close" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" tabindex="0" />
				<img class="icons previous" src="assets/icons/arrowLeft.svg" tabindex="0"/>
				<img class="icons next" src="assets/icons/arrowRight.svg" tabindex="0"/>
                </div>
                <div class="lightbox">
                    <img src="${image.src}" tabindex="0"/>    
                </div>
				<h2 tabindex="0">${image.alt}</h2>
				`;
		};

		document.getElementById("lightbox_modal").classList.add("show");
			document.getElementById("close").focus();	
	};

	function nextElt() {
		index++;
		if (index === thumbnails.length) {
			index = 0;
		}
		showLightbox(thumbnails[index]);
	}

	function previousElt() {
		index--;
		if (index === -1) {
			index = thumbnails.length - 1;
		}
		showLightbox(thumbnails[index]);
	}

	// listen to the click event & spread the "click" listener to each node element created
	[...document.querySelectorAll(".next")].map((elt) => {
		elt.addEventListener("click", function (e) {
			nextElt();
			console.log(index);
		});
	});
	[...document.querySelectorAll(".previous")].map((elt) => {
		elt.addEventListener("click", function () {
			previousElt();
			console.log(index);
		});
	});

	// listen to the keyboard events
	document.addEventListener("keyup", function (event) {

		// force focus on close icon after navigation
		if (document.activeElement === document.querySelector("h2") && event.key === "Tab") {	
			window.setTimeout( () => {
				document.getElementById("close").focus();
			}, 900);
		};
		
		// all keyboard events
		if (event.key === "ArrowRight") {
			nextElt();
			event.stopImmediatePropagation();
			console.log(index);
		} else if (event.key === "ArrowLeft") {
			previousElt();
			event.stopImmediatePropagation();
			console.log(index);
		} else if (document.activeElement === document.getElementById("close") && event.key === "Enter") {
			closeLightbox();
		} else if (event.key === "Tab" || event.key === "Enter") {
			console.log("navigation en cours");
		} else if (event.key === "Escape") {
			closeLightbox();
		} else {
			event.stopImmediatePropagation();
			console.log("touche clavier non prévue");
		};

	});
}

// Hide Lightbox
//  -------------------------------------------------------

function closeLightbox() {
	document.getElementById("lightbox_modal").classList.remove("show");
	document.getElementById("lightbox_modal").innerHTML = "";
}
