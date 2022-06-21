//  -------------------------------------------------------
//      Script to display the lightbox
//  -------------------------------------------------------

const $mediasWrapper = document.querySelector(".medias-wrapper");
const $lightbox = document.getElementById("lightbox_modal");

//  Show lightbox
//  -------------------------------------------------------

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
			
			function nextElt(params) {
				index++;
				if (index === thumbnails.length) {
					index = 0;
				}
				showLightbox(thumbnails[index]);
			}

			function previousElt(params) {
				index--;
				if (index === -1) {
					index = thumbnails.length - 1;
				}
				showLightbox(thumbnails[index]);
			}
			
			[...document.querySelectorAll('.next')].map(elt =>{
				elt.addEventListener("click", function() {
				nextElt();
				});
				document.addEventListener("keyup", function() {
					// rajouter condition pour quel cle keyup
					// document.addEventListener("keyup", function() {
					//     console.log("hello");;
					// });
					console.log(e.keyCode);
					if (e.key === "Enter" || e.key === "ArrowRight") {

						nextElt();
					}
				});
			});
			

			[...document.querySelectorAll('.previous')].map(elt =>{
				elt.addEventListener("click", function() {
					previousElt();
				});
			});
		};

		
		showLightbox(imageWrapper);
		
			// // Listen to "keyup" on next & previous
			// document.querySelector(".next").addEventListener("keyup", function(e) {
			// 	if (e.key === "Enter" || e.key === "ArrowRight") {
			// 		// console.log("Selection suivante");
			// 		index++;
			// 		if (index === thumbnails.length) {
			// 			index = 0;
			// 		}
			// 		showLightbox(thumbnails[index]);
		
			// 	}
			// });
		
			// document.querySelector(".previous").addEventListener("keyup", function(e) {
			// 	if (e.key === "Enter" || e.key === "ArrowLeft") {
			// 		// console.log("Selection précedente");
			// 		index--;
			// 		if (index === -1) {
			// 			index = thumbnails.length - 1;
			// 		}
			// 		showLightbox(thumbnails[index]);
			// 	}
			// });
	});
});



// Hide Lightbox
//  -------------------------------------------------------

function closeLightbox() {
    $lightbox.classList.remove("show");
	$lightbox.innerHTML = ""
};
