//      Script to display the lightbox
//      -------------------------------------------------------------------------------------------

const $mediasWrapper = document.querySelector(".medias-wrapper");
const $lightbox = document.getElementById("lightbox_modal");

//  Show lightbox

document.addEventListener("DOMContentLoaded", () => {

	$mediasWrapper.addEventListener("click", (e) => {
		const imageWrapper = e.target.closest(".media-thumbnail");

		if (imageWrapper) {
			const image = imageWrapper.querySelector("img");
			const video = imageWrapper.querySelector("video");
			if (image) {
				$lightbox.innerHTML =
				`
                <div class="icons">
                    <img class="icons" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" />
                    <img class="icons" src="assets/icons/arrowLeft.svg" onclick="closeLightbox()" />
                    <img class="icons" src="assets/icons/arrowRight.svg" onclick="closeLightbox()" />
                </div>
                <div class="lightbox">
                    <img src="${image.src}" />    
                </div>
				<h2>${image.alt}</h2>
				`;
				$lightbox.classList.add("show");
			}
			if (video) {
				$lightbox.innerHTML = `
				<div class="icons">
					<img class="icons" src="assets/icons/closeBlack.svg" onclick="closeLightbox()" />
					<img class="icons" src="assets/icons/arrowLeft.svg" onclick="closeLightbox()" />
					<img class="icons" src="assets/icons/arrowRight.svg" onclick="closeLightbox()" />
				</div>
                <div class="lightbox">
                    <iframe 
                        height="400" 
                        width="600" 
                        src="${video.src}"
                    ></iframe>
                </div>
				<h2>${video.alt}</h2>
                `;
				console.log(video.alt);
				$lightbox.classList.add("show");
			}
		}
	});
});

// Hide Lightbox (function called through onclick on the "close.svg")

function closeLightbox() {
    $lightbox.classList.remove("show");
};
