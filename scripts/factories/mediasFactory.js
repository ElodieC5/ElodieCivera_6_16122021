
//      Factory to build media template
//      Create media cards inside the selected photographer page
//     -------------------------------------------------------------------------------------------


// constructor pattern for the media cards
class MediaCard {

    constructor(selectedPhotographer, mediaSample) {
        this.selectedPhotographer = selectedPhotographer;
        this.mediaSample = mediaSample;
    }
    
    createMediaCard() {
    let namePortrait = this.selectedPhotographer.name;
    namePortrait = namePortrait.split(" ");

    const mediaImg = `<img alt="${this.mediaSample.title}" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.image}" />`;
    const mediaVid = `<video alt="${this.mediaSample.title}" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.video}"></video>`;

    return `
        <div class="media-thumbnail">
            ${this.mediaSample.image ? mediaImg : mediaVid}
            <h3>${this.mediaSample.title}</h3>
            <div class="likes-btn" aria-label="likes">
                ${this.mediaSample.likes}
                <img class="likes-btn" src="assets/icons/heart.svg" />
            </div>
        </div>
        `;
    };
}
 // create media cards using literal template


// this.wrapper.innerHTML = mediaCard;
// this.handleLikesButton();

// the method returns the media card as a DOM div
// return this.wrapper;

// get mediaSample() {
    //     return this.mediaSample;
    // }
    
    // handleLikesButton() {
        //     const that = this;
        
        //     this.wrapper
        //         .querySelector('.likes-btn')
        //         .addEventListener('click', function() {
            //             if (this.classList.contains('liked')) {
                //                 this.classList.remove('liked')
                //                 that.likesCount.fire('DEC')
                //             } else {
                    //                 this.classList.add('liked')
                    //                 that.likesCount.fire('INC')
                    //             }
                    //         })
                    // }


                    // let a = 2;


                    // if (a === 2) {
                    //     console.log('bonjour');
                    // } else {
                        
                    //     console.log('bonsoir');
                    // }
                            
                    // //ternaire
                    // //condition          true        :  false  
                    // a == 2 ?  console.log('bonjour') : console.log('bonsoir');
