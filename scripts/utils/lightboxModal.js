//  -------------------------------------------------------
//      Script to display the lightbox
//  -------------------------------------------------------


//	Waiting for all the container-media to be available prior to launch the lightbox
//  -------------------------------------------------------
function init() {
	setTimeout(() => {
		// console.log(document.querySelector('.container-media'));
		myLightbox();
	}, 500);
}

let index;
let thumbnails;
init();

//  Open the lightbox through the selected media
//  -------------------------------------------------------
function myLightbox() {

	thumbnails = [...document.querySelectorAll(".media-thumbnail")];
	const cardsGallery = document.querySelectorAll(".container-media");
	
	//	Listen to the click event
	cardsGallery.forEach((card) => card.addEventListener("click", (e) => {
		e.stopImmediatePropagation();
		const imageWrapper = e.target.closest(".media-thumbnail");
		index = thumbnails.indexOf(imageWrapper);
		showLightbox(imageWrapper);
	})
	);

	//	Listen to the keyup event
	cardsGallery.forEach((card) => card.addEventListener("keyup", (e) => {
		e.stopImmediatePropagation();
		if (document.activeElement === card && e.key === "Enter") {
			const imageWrapper = e.target.closest(".media-thumbnail");
			index = thumbnails.indexOf(imageWrapper);		
			document.getElementById("lightbox_modal").classList.add("show");
			showLightbox(imageWrapper);	
		}
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
		const controle = `
		<div class="icons">
			<img id="close" class="icons close" src="assets/icons/closeBlack.svg" alt="croix de fermeture" aria-label="fermer visionneuse" onclick="closeLightbox()" tabindex="0"/>
			<img id="previous" class="icons previous" src="assets/icons/arrowLeft.svg" alt="chevron gauche" aria-label="media précédent" onclick="previousElt()" tabindex="0"/>
			<img id="next" class="icons next" src="assets/icons/arrowRight.svg" alt="chevron droit" aria-label="media suivant" onclick="nextElt()" tabindex="0"/>
		</div>
		`;
		if (video) {
			document.getElementById("lightbox_modal").innerHTML = `
				${controle}
				<div class="lightbox">
                    <iframe src="${video.src}" aria-label="${video.title}" tabindex="0"></iframe>
				</div>
				<h2 tabindex="0">${video.getAttribute("aria-label")}</h2>
			`;
		}
		if (image) {	
			document.getElementById("lightbox_modal").innerHTML = `
				${controle}
				<div class="lightbox">
                	<img src="${image.src}" alt="${image.alt}" tabindex="0"/>    
            	</div>
				<h2 tabindex="0">${image.alt}</h2>
			`;
		}
		document.getElementById("lightbox_modal").classList.add("show");
		document.getElementById("close").focus();	
	}

	//	Listen to the keyboard events
	document.addEventListener("keyup", function (event) {

		//	... force focus on close icon after navigation
		if (document.activeElement === document.querySelector("h2") && event.key === "Tab") {	
			window.setTimeout( () => {
				document.getElementById("close").focus();
			}, 800);
		}
		
		//	...all keyboard events
		if (event.key === "ArrowRight") {
			nextElt();
			event.stopImmediatePropagation();
			console.log(index);
		} else if (event.key === "ArrowLeft") {
			previousElt();
			event.stopImmediatePropagation();
			console.log(index);
		} else if (document.activeElement === document.getElementById("next") && event.key === "Enter") {
			nextElt();
			console.log(index);
		} else if (document.activeElement === document.getElementById("previous") && event.key === "Enter") {
			previousElt();
			event.stopImmediatePropagation();
			console.log(index);
		} else if (document.activeElement === document.getElementById("close") && event.key === "Enter") {
			closeLightbox();
		} else if (event.key === "Escape") {
			closeLightbox();
		} 
		// else {
		// 	console.log("touche clavier non prévue");
		// }
	});
}

// Hide Lightbox
//  -------------------------------------------------------
function closeLightbox() {
	document.getElementById("lightbox_modal").classList.remove("show");
	document.getElementById("lightbox_modal").innerHTML = "";
}

// Navigation Next / Previous
//  -------------------------------------------------------
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