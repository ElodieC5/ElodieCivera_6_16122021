//  -------------------------------------------------------
//  Script for the photographer page (dedicated to a selected photographer)
//  Display the photographer card and all of his/her work
//  -------------------------------------------------------


//  Collect the ID attached to the selected photographer
//  -------------------------------------------------------

const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = Number(searchParams.get("id"));
let mediaList = [];
let mediaSection = "";
let selectedPhotographer;


async function displayData() {

	//  Call fetch function & destructure the photographers & medias
	// eslint-disable-next-line no-undef
	const { photographers, media } = await getPhotographers();
    
	//  Collect the selected photographer and his/her works through filter on ID & destructure it
	[selectedPhotographer] = photographers.filter(photographer => photographer.id === photographerIdUrl);
	mediaList = media.filter(media => media.photographerId === photographerIdUrl);
    
	//  Call the headerPhotgraphe factory
	// eslint-disable-next-line no-undef
	headerPhotographe(selectedPhotographer);
	// eslint-disable-next-line no-undef
	contactModal();

	// Sort by popularity by default - popularity is the default case for the function sortData
	// eslint-disable-next-line no-undef
	sortData();
	totalLikes();
}

//  Create & display media cards inside the DOM "medias-wrapper"
//  -------------------------------------------------------

// eslint-disable-next-line no-unused-vars
function createGallery() {
	mediaSection = document.querySelector(".medias-wrapper");
	
	// first create the media card as an instance of MediaCard through appropriate method 
	// then display it in mediaSection - see line 67
	mediaList.forEach(media => {
		const template = 
        // eslint-disable-next-line no-undef
        new MediaCard(selectedPhotographer, media).createMediaCard();
		mediaSection.innerHTML += template;
	});
}

//  Create the "totalLikes" division for the whole page
//  -------------------------------------------------------

function totalLikes() {
	const pPrice = document.querySelector( "p.prix" );
	let nbLikes = 0;
    
	mediaList.map(media => {
		nbLikes = nbLikes + media.likes;
	});
    
	pPrice.insertAdjacentHTML(
		"afterbegin",
		`<div id="totalLikes">
        <div class="total">${nbLikes} </div>
        <img class="totalLikes" alt="coeur" aria-label="total des j'aime" src="assets/icons/heartBlack.svg" />
        </div>
        ${selectedPhotographer.price}€ / jour
        `
	);
}
displayData();





