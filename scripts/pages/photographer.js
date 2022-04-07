
//     Script for the photographer page (dedicated to a selected photographer)
//     Display the photographer card and all of his/her work
//     -------------------------------------------------------------------------------------------


//  collect the ID attached to the selected photographer

const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = Number(searchParams.get("id"));


async function displayData() {

    //  Call fetch function & destructure the photographers & medias

    const { photographers, media } = await getPhotographers();


    //  Collect the selected photographer and his/her works through filter on ID & destructure it

    const [selectedPhotographer] = photographers.filter(photographer => photographer.id === photographerIdUrl);

    const mediaList = media.filter(media => media.photographerId === photographerIdUrl);


    //  Call the photographerFactory (and its getCardDOM method) for the selected photographer

    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();


    //  Display card inside the DOM "photograph-header" for selected photographer

    const photographerSection = document.querySelector(".photograph-header");
    photographerSection.appendChild(CardDOM);

    const link = document.querySelector("article > a");
    link.remove();

    const img = document.createElement( "img" );
    img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
    img.setAttribute("alt", " ");
    img.setAttribute("aria-label", selectedPhotographer.name);

    const h2 = document.createElement( "h2" );
    h2.textContent = selectedPhotographer.name;

    const pPrice = document.querySelector( "p.prix" );


    const article = document.querySelector( "article" );
    article.appendChild(img);
    article.appendChild(h2);


    //  Display media cards inside the DOM "medias-wrapper"

    const mediaSection = document.querySelector(".medias-wrapper");

    mediaList.forEach(media => {
        const template = 
            new MediaCard(selectedPhotographer, media).createMediaCard();
        mediaSection.innerHTML += template;
    });

	function totalLikes() {
		let nbLikes = 0;
		mediaList.map((media) => {
			nbLikes = nbLikes + media.likes;
		});
		pPrice.insertAdjacentHTML("afterbegin", `<div id="totalLikes">${nbLikes} <img class='totalLikes' src='assets/icons/heartBlack.svg'/></div>`);
    }

    totalLikes();

};

displayData();

