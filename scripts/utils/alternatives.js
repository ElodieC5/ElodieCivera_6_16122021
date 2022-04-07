
//      ALTERNATIVE 1 = Display the lightbox through a decorator pattern
//      ---------------------------------------------------

//  1st : Create the lightbox as a class____________________  

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

//  2nd : Call it each time a mediaCard is selected

// function mediaWithLightbox(media) {
    
//         media.addEventListener('click', () => {
//             console.log(media);
//             const Player = new Lightbox(media)
//             Player.render()
//         })
// }

//  3rd : Apply this "patch" (the Decorator Pattern i.e. mediaWithLightbox() )
//  to the new object created through the class MediaCard (see mediasFactory.js)