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
                <div class="container-number" data-idmedia="${this.mediaSample.id}">
                    ${this.mediaSample.likes}
                </div>
                <div class="container-image">
                    <img data-idmedia="${this.mediaSample.id}" data-nblikes="${this.mediaSample.likes}" onclick="handleLikesButton(this)" class="likes-btn" src="assets/icons/heart.svg" />
                </div>
            </div>
        </div>
        `;
	}


}

function handleLikesButton(media) {
    const idMedia = media.dataset.idmedia;
    const containerNumber = document.querySelector( `.container-number[data-idmedia="${idMedia}"]` );

    // recuperer le nombrer de like
    let nbLikes = parseInt(containerNumber.textContent, 10);
    nbLikes += 1;                                                                           
    containerNumber.textContent = nbLikes;

// pour chercher la precence d'un class classlist.contains

    // tu vas verifier si il y a une class active sur le container-number
    // si oui {
        //je decremente
        //je supprime la class active
//    }
//else{ j'incremente
//       j'ajoute la class active}
        };

