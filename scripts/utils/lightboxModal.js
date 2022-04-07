
//      Script to display the lightbox
//      -------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", () => {

    const $mediasWrapper = document.querySelector('.medias-wrapper');
    const $lightbox = document.getElementById('lightbox_modal');
    

    //  Show lightbox 
    
    $mediasWrapper.addEventListener('click', e => {
        
        const imageWrapper = e.target.closest('.media-thumbnail');
        
        if (imageWrapper) {
            const image = imageWrapper.querySelector('img');
            const video = imageWrapper.querySelector('video');
            if (image) {
                console.log(image.src);
                $lightbox.innerHTML = `
                           <div class="player">
                             <img src="assets/icons/close.svg" onclick="closeLightbox()" />
                                 <iframe 
                                    height="400" 
                                 width="600" 
                                src="${image.src}"
                             ></iframe>
                            </div>
                         `;
						$lightbox.classList.add("show");
            }
            if (video) {
                $lightbox.innerHTML = `
                             <div class="player">
                             <img src="assets/icons/close.svg" onclick="closeLightbox()" />
                                 <iframe 
                                     height="400" 
                                     width="600" 
                                     src="${video.src}"
                                 ></iframe>
                             </div>
                         `;
                $lightbox.classList.add('show');
            }
        }
    });
    
    
})


// Hide Lightbox (function called through onclick on the "close.svg")

function closeLightbox() {
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "none";
}