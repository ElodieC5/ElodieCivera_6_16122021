//      Script to display the lightbox
//      -------------------------------------------------------------------------------------------

const $mediasWrapper = document.querySelector(".medias-wrapper");
const $lightbox = document.getElementById("lightbox_modal");

//  Show lightbox

document.addEventListener("DOMContentLoaded", () => {

	$mediasWrapper.addEventListener("click", (e) => {
		const thumbnails = [...document.querySelectorAll(".media-thumbnail")];
		console.log(thumbnails);

		const imageWrapper = e.target.closest(".media-thumbnail");
		let index = thumbnails.indexOf(imageWrapper);
		console.log(index);

		function showLightbox(imageWrapper) {
			
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
		};
		showLightbox(imageWrapper);

		
			// Listen to "click" on next & previous
			document.querySelector(".next").addEventListener("click", function() {
				index++;
				console.log(index);

				if (index === thumbnails.length) {
					index = 0;
				}
				showLightbox(thumbnails[index]);
			});
			document.querySelector(".previous").addEventListener("click", function() {
				index--;
				if (index === -1) {
					index = thumbnails.length - 1;
				}
				showLightbox(thumbnails[index]);
			});
		
		
			// Listen to "keyup" on next & previous
			document.querySelector(".next").addEventListener("keyup", function(e) {
				if (e.key === "Enter" || e.key === "ArrowRight") {
					// console.log("Selection suivante");
					index++;
					if (index === thumbnails.length) {
						index = 0;
					}
					showLightbox(thumbnails[index]);
		
				}
			});
		
			document.querySelector(".previous").addEventListener("keyup", function(e) {
				if (e.key === "Enter" || e.key === "ArrowLeft") {
					// console.log("Selection précedente");
					index--;
					if (index === -1) {
						index = thumbnails.length - 1;
					}
					showLightbox(thumbnails[index]);
				}
			});
	});
});



// Hide Lightbox (function called through onclick on the "close.svg")

function closeLightbox() {
    $lightbox.classList.remove("show");
	$lightbox.innerHTML = ""
};
