
//     Script for the photographer page (dedicated to a selected photographer)
//     Display the photographer card and all of his/her work
//     -------------------------------------------------------------------------------------------


// collect the ID attached to the selected photographer
const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = searchParams.get("id");

async function displayData() {

    // call the fetch function & destructure the photographers & medias
    const { photographers, media } = await getPhotographers();
    
    // collect the selected photographer and his/her works through filter on ID
    const selectedPhotographers = photographers.filter(
        (photographer) => photographer.id == photographerIdUrl
        );
    const selectedPhotographer = selectedPhotographers[0];

    const mediaList = media.filter(
        (media) => media.photographerId == photographerIdUrl
        );

    // calling the photographerFactory (and its getCardDOM method) for the selected photographer
    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();
    
    // display card inside the DOM "photograph-header" for selected photographer
    const photographersSection = document.querySelector(".photograph-header");
    photographersSection.appendChild(CardDOM);
    
    const link = document.querySelector("article > a");
    link.remove();
    
    /* const picture = `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`; */

    const img = document.createElement( "img" );
    img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
    img.setAttribute("alt", " ");
    img.setAttribute("aria-label", selectedPhotographer.name);
    
    const h2 = document.createElement( "h2" );
    h2.textContent = selectedPhotographer.name;
    
    const article = document.querySelector("article");
    article.appendChild(img);
    article.appendChild(h2);  

    // display media cards inside the DOM "medias-wrapper"
    const mediaWrapper = document.querySelector(".medias-wrapper");
    

    const mediaSample = mediaList.forEach(element => {
        const template = new MediaCard(selectedPhotographer, element, element.likes).createMediaCard()

        mediaWrapper.appendChild(template)
    });
    
};

displayData();
