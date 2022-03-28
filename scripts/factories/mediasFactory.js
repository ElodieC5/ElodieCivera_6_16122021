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
    <div class="container-image">
    <img class="likes-btn" src="assets/icons/heart.svg" />
    </div>
    </div>
    </div>
    `;
	}

    	// handleLikesButton() {

	//         this.querySelector('.likes-btn')
	//             .addEventListener('click', function() {
	//                     if (this.classList.contains('liked')) {
	//                             this.classList.remove('liked')
	//                             this.likesCount.fire('DEC')
	//                         } else {
	//                                 this.classList.add('liked')
	//                                 that.likesCount.fire('INC')
	//                             }
	//                         })
	//                 };

	// handleLikesButton()

}
