//  -------------------------------------------------------
//  Script for the photographer page (dedicated to a selected photographer)
//  Display the photographer card and all of his/her work
//  -------------------------------------------------------


//  Collect the ID attached to the selected photographer
//  -------------------------------------------------------

const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = Number(searchParams.get("id"));
let mediaList = [];
let mediaLikes = [];
let mediaSection = "";
let selectedPhotographer;


async function displayData() {

    //  Call fetch function & destructure the photographers & medias
    const { photographers, media } = await getPhotographers();
    
    //  Collect the selected photographer and his/her works through filter on ID & destructure it
    [selectedPhotographer] = photographers.filter(photographer => photographer.id === photographerIdUrl);
    mediaList = media.filter(media => media.photographerId === photographerIdUrl);
    
    //  Call the photographerFactory (and its getCardDOM method) for the selected photographer
    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();
    

    //  Display card inside the DOM "photograph-header" for selected photographer
    const span = document.querySelector("span");
    span.setAttribute("aria-label", `Ceci est la page de ${selectedPhotographer.name}`);

    const photographerSection = document.querySelector(".photograph-header");
    photographerSection.appendChild(CardDOM);
    
    const link = document.querySelector("article > a");
    link.remove();
    
    const h1 = document.createElement( "h1" );
    h1.textContent = selectedPhotographer.name;
    h1.classList.add("profil");
    h1.setAttribute("tabindex", "0");
    
    const img = document.createElement( "img" );
    img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
    img.setAttribute("alt", "Photo du photographe");
    img.setAttribute("aria-label", `Photo représentative de ${selectedPhotographer.name}`);
    img.setAttribute("tabindex", "0");

    const article = document.querySelector( "article" );
    article.appendChild(h1);
    article.appendChild(img);

    // Sort by popularity by default - popularity is the default case for the function sortData
    sortData();
    totalLikes();
};

//  Create & display media cards inside the DOM "medias-wrapper"
//  -------------------------------------------------------
function createGallery() {
    mediaSection = document.querySelector(".medias-wrapper");

    // first create the media card as an instance of MediaCard through appropriate method 
    // then display it in mediaSection - see line 67
    mediaList.forEach(media => {
        const template = 
        new MediaCard(selectedPhotographer, media).createMediaCard();
        mediaSection.innerHTML += template;
    });
};

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
        </div>`
        );
    };
    
    displayData();





