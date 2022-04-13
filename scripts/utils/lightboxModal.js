//      Script to display the lightbox
//      -------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
	const $mediasWrapper = document.querySelector(".medias-wrapper");
	const $lightbox = document.getElementById("lightbox_modal");

	//  Show lightbox

	$mediasWrapper.addEventListener("click", (e) => {
		const imageWrapper = e.target.closest(".media-thumbnail");

		if (imageWrapper) {
			const image = imageWrapper.querySelector("img");
			const video = imageWrapper.querySelector("video");
			if (image) {
				$lightbox.innerHTML = `
                <div class="icons">
                    <img class="icons" src="assets/icons/close.svg" onclick="closeLightbox()" />
                </div>
                <div class="lightbox">
                    <img src="${image.src}" />
                    <h2>${image.alt}</h2>
                </div>`;
				$lightbox.classList.add("show");
			}
			if (video) {
				$lightbox.innerHTML = `
                             <div class="lightbox">
                             <img class="icons" src="assets/icons/close.svg" onclick="closeLightbox()" />
                                 <iframe 
                                     height="400" 
                                     width="600" 
                                     src="${video.src}"
                                 ></iframe>
                             </div>
                         `;
				$lightbox.classList.add("show");
			}
		}
	});
});

// Hide Lightbox (function called through onclick on the "close.svg")

function closeLightbox() {
	const modal = document.getElementById("lightbox_modal");
    modal.classList.remove("show");
}
