//  -------------------------------------------------------
//      Script to display the lightbox
//  -------------------------------------------------------


const $mediasWrapper = document.querySelector(".medias-wrapper");
const $lightbox = document.getElementById("lightbox_modal");


//  Show lightbox
//  -------------------------------------------------------


// waiting for the mediaFactory data to be loaded
document.addEventListener("DOMContentLoaded", () => {
	
	$mediasWrapper.addEventListener("click", (e) => {

		const thumbnails = [...document.querySelectorAll(".media-thumbnail")];
		const imageWrapper = e.target.closest(".media-thumbnail");
		let index = thumbnails.indexOf(imageWrapper);

		function showLightbox(imageWrapper) {
			
			// check if user clicked either picture or movie through the media's wrapper
			if (imageWrapper) {
				const image = imageWrapper.querySelector(".photo");
				const video = imageWrapper.querySelector(".film");

				if (video) {
					$lightbox.innerHTML = `
				<div class="icons">
					<img class="icons close" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" />
					<img class="icons previous" src="assets/icons/arrowLeft.svg"/>
					<img class="icons next" src="assets/icons/arrowRight.svg"/>
				</div>
                <div class="lightbox">
                    <iframe 
                        height="600" 
                        width="600" 
                        src="${video.src}"
                    ></iframe>
                </div>
				<h2>${video.getAttribute("alt")}</h2>
                `;
					$lightbox.classList.add("show");
				}
				if (image) {
					$lightbox.innerHTML = `
                <div class="icons">
                    <img class="icons close" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" />
                    <img class="icons previous" src="assets/icons/arrowLeft.svg"/>
                    <img class="icons next" src="assets/icons/arrowRight.svg"/>
                </div>
                <div class="lightbox">
                    <img src="${image.src}" />    
                </div>
				<h2>${image.alt}</h2>
				`;
					$lightbox.classList.add("show");
				};
			};
			
			function nextElt() {
				index++;
				if (index === thumbnails.length) {
					index = 0;
				};
				showLightbox(thumbnails[index]);
			};

			function previousElt() {
				index--;
				if (index === -1) {
					index = thumbnails.length - 1;
				};
				showLightbox(thumbnails[index]);
			};
			
			// spread the "click" listener to each node element created
			[...document.querySelectorAll('.next')].map(elt =>{
				elt.addEventListener("click", function(e) {
					nextElt();
					console.log(index);
				});
			});
			
			[...document.querySelectorAll('.previous')].map(elt =>{
				elt.addEventListener("click", function() {
					previousElt();
					console.log(index);
				});
			});

			// listen to the keyboard event
			document.addEventListener("keyup", function(event) {
				if (event.key === "ArrowRight") {
					nextElt();
					event.stopImmediatePropagation();
					console.log(index);
				} else if (event.key === "ArrowLeft") {
					previousElt();
					event.stopImmediatePropagation();
					console.log(index);
				} else {
					event.stopImmediatePropagation();
					console.log("touche clavier non prévue");
				};
			});
		};

		showLightbox(imageWrapper);
	});
});


// Hide Lightbox
//  -------------------------------------------------------


function closeLightbox() {
    $lightbox.classList.remove("show");
	$lightbox.innerHTML = ""
};
