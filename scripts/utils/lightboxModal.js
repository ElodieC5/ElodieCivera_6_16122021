// ...........version selon cours avec un decorator pattern ??

// class Lightbox {
//     constructor(media) {
//         this.media = media

//         this.$wrapper = document.createElement('div')
//         this.$wrapper.classList.add('lightbox-view')

//         this.$modalWrapper = document.querySelector('lightbox_modal')
//     }

//     closeLightbox() {
//                 this.$modalWrapper.classList.remove('modal-on')
//                 this.$wrapper.innerHTML = ""
//     }

//     createPlayer() {
//         const player = `
//             <div class="player">
//             <img src="assets/icons/close.svg" onclick="closeLightbox()" />
//                 <iframe 
//                     height="600" 
//                     width="800" 
//                     src=${this.media.image}
//                 ></iframe>
//             </div>
//         `

//         this.$wrapper.innerHTML = player

//         this.$modalWrapper.classList.add('modal-on')
//         this.$modalWrapper.appendChild(this.$wrapper)

//     }

//     render() {
//         this.createPlayer()
//     }
// }

// // ..............decorator pattern pour lightbox

// function mediaWithLightbox(media) {
    
//         media.addEventListener('click', () => {
//             console.log(media);
//             const Player = new Lightbox(media)
//             Player.render()
//         })
// }

document.addEventListener("DOMContentLoaded", () => {

    const $mediasWrapper = document.querySelector('.medias-wrapper');
    const $lightbox = document.getElementById('lightbox_modal');
    
    
    // Show lightbox 
    
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
    
    // Hide Lightbox

    function closeLightbox() {
        const modal = document.getElementById("lightbox_modal");
        modal.style.display = "none";
    }
})