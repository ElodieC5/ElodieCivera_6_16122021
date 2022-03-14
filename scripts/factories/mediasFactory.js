
//      Factory to build media template
//      Create media cards inside the selected photographer page
//     -------------------------------------------------------------------------------------------


// constructor pattern for the media cards
class MediaCard {

    constructor(selectedPhotographer, mediaSample) {
        this.selectedPhotographer = selectedPhotographer;
        this.mediaSample = mediaSample;
        // this.mediaType = mediaType;
        // if (media.hasOwnProperty("image")) {
    //     mediaType = "image";
    //     } else if (media.hasOwnProperty("video")) {
    //     mediaType = "video";
    //     }
    //     return mediaType;
    //     console.log(mediaType);
    // });
        // this.wrapper = document.createElement('div');
        // this.wrapper.classList.add('media-card-wrapper');
        
    }

test() {
    if (this.mediaSample.image) {
        console.log(this.mediaSample.image);
        return this.createMediaCardImg();
    }else{
        console.log("no");
        // return this.createMediaCardVid();
        // return this.createMediaCardImg();
    }
 }
    
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

    // create media cards using literal template
    createMediaCardImg() {
        let namePortrait = this.selectedPhotographer.name;
        namePortrait = namePortrait.split(" ");

console.log(namePortrait[0],this.mediaSample.image);

        const mediaCard = `
        <div class="media-thumbnail">
            <img alt="${this.mediaSample.title}" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.image}" />
            <h3>${this.mediaSample.title}</h3>
            <div class="likes-btn" aria-label="likes">
                <img class="likes-btn" src="assets/icons/heart.svg" />
            </div>
        </div>
                `
                    
        // this.wrapper.innerHTML = mediaCard;
        // this.handleLikesButton();

        // the method returns the media card as a DOM div
        // return this.wrapper;
        return mediaCard;
    }

    createMediaCardVid() {
        let namePortrait = this.selectedPhotographer.name;
        namePortrait = namePortrait.split(" ");

console.log(namePortrait[0],this.mediaSample.image);

        const mediaCard = `
        <div class="media-thumbnail">
            <video alt="${this.mediaSample.title}" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.video}"></video>
            <h3>${this.mediaSample.title}</h3>
            <div class="likes-btn" aria-label="likes">
            <img class="likes-btn" src="assets/icons/heart.svg" />
            </div>
        </div>
                `
                    
        // this.wrapper.innerHTML = mediaCard;
        // this.handleLikesButton();

        // the method returns the media card as a DOM div
        // return this.wrapper;
        return mediaCard;
    }
};
