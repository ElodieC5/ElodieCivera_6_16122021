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
