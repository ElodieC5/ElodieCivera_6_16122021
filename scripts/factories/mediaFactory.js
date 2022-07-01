//  ------------------------------------------------------- 
//	Factory to build media template
//	Create media cards inside the selected photographer page
//  -------------------------------------------------------


// Constructor pattern for the media cards

// eslint-disable-next-line no-unused-vars
class MediaCard {
	constructor(selectedPhotographer, mediaSample) {
		this.selectedPhotographer = selectedPhotographer;
		this.mediaSample = mediaSample;
	}

	// This function is called through "template" = any new instance of MediaCard

	createMediaCard() {
		let namePortrait = this.selectedPhotographer.name;
		namePortrait = namePortrait.split(" ");

		const mediaImg = `<img class="photo" alt="${this.mediaSample.title}" aria-label="" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.image}" />`;
		const mediaVid = `<video controls class="film" aria-label="${this.mediaSample.title}" src="assets/photographers/${namePortrait[0]}/${this.mediaSample.video}"></video>`;

		return `
    <div class="media-thumbnail">
		<div class="container-media" tabindex="0">
        	${this.mediaSample.image ? mediaImg : mediaVid}
		</div>
        <h3 data-date="${this.mediaSample.date}" tabindex="0">
			${this.mediaSample.title}
		</h3>
        <div class="likes-btn">
          <div class="container-number" data-idmedia="${this.mediaSample.id}" tabindex="0">
            ${this.mediaSample.likes}
          </div>
          <div class="container-image" tabindex="0">
            <img class="imgHeart" alt="coeur" aria-label="nombre de j'aime" data-idmedia="${this.mediaSample.id}" data-nblikes="${this.mediaSample.likes}"
              onclick="handleLikesButton(this)" class="likes-btn" src="assets/icons/heart.svg" />
          </div>
      	</div>
	</div>
        `;
	}
}

// This function is called here above while creating the "container-image"

// eslint-disable-next-line no-unused-vars
function handleLikesButton(media) {

	// select the unique media cliked thanks to its id then the containers to be inc/dec

	const idMedia = media.dataset.idmedia;
	const totalLikes = document.querySelector(".total");
	const containerNumber = document.querySelector(
		`.container-number[data-idmedia="${idMedia}"]`
	);

	// collect the likes number, convert & inc/dec locally/totally when cliked
    
	let nbLikes = parseInt(containerNumber.textContent, 10);
	let sumLikes = parseInt(totalLikes.textContent, 10);

	if (containerNumber.classList.contains("alreadyLiked")) {
		nbLikes -= 1;
		sumLikes -= 1;
		containerNumber.textContent = nbLikes;
		totalLikes.textContent = sumLikes;
		containerNumber.classList.remove("alreadyLiked");
	} else {
		nbLikes += 1;
		sumLikes += 1;
		containerNumber.textContent = nbLikes;
		totalLikes.textContent = sumLikes;
		containerNumber.classList.add("alreadyLiked");
	}
}

