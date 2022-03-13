
//      Factory to build media template
//      Create media cards inside the selected photographer page
//     -------------------------------------------------------------------------------------------


// constructor pattern for the media cards
class MediaCard {

    constructor(selectedPhotographer, mediaSample, likesCount, mediaType) {
        this.selectedPhotographer = selectedPhotographer;
        this.mediaSample = mediaSample;
        this.likesCount = likesCount;
        this.mediaType = mediaType;
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('media-card-wrapper');
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
    createMediaCard() {
        let namePortrait = this.selectedPhotographer.name;
        namePortrait = namePortrait.split(" ");

console.log(namePortrait[0],this.mediaSample.image);

        const mediaCard = `
            <div class="media-thumbnail">
                <img
                    alt="${this.mediaSample.title}"
                    src="assets/photographers/${namePortrait[0]}/${this.mediaSample.image}"
                    />
                <h3>${this.mediaSample.title}</h3>
                <div class="likes-btn" aria-label="likes">
                <img class="likes-btn" src="assets/icons/heart.svg"/>
                </div>
                </div>
                `
                // <svg class="heart" viewBox="0 0 240 220">
                // <g transform="translate(-175,-1696)">
                // <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                // </g>
                // </svg>
                    
        this.wrapper.innerHTML = mediaCard;
        // this.handleLikesButton();

        // the method returns the media card as a DOM div
        return this.wrapper;

    }
};
