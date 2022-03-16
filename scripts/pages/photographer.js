
//     Script for the photographer page (dedicated to a selected photographer)
//     Display the photographer card and all of his/her work
//     -------------------------------------------------------------------------------------------


// collect the ID attached to the selected photographer
const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = Number(searchParams.get("id"));

async function displayData() {

    // call the fetch function & destructure the photographers & medias
    const { photographers, media } = await getPhotographers();
    
    // collect the selected photographer and his/her works through filter on ID & destructure it
    const [selectedPhotographer] = photographers.filter(photographer => photographer.id === photographerIdUrl);

    const mediaList = media.filter(media => media.photographerId === photographerIdUrl);

    // calling the photographerFactory (and its getCardDOM method) for the selected photographer
    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();
    
    // display card inside the DOM "photograph-header" for selected photographer
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
    
    const article = document.querySelector("article");
    article.appendChild(img);
    article.appendChild(h2);  

    // display media cards inside the DOM "medias-wrapper"
    const mediaSection = document.querySelector(".medias-wrapper");
    

    mediaList.forEach(media => {
        const template = new MediaCard(selectedPhotographer, media).createMediaCard();
    
        mediaSection.innerHTML += template;
    });
    
};

displayData();

// const tab = [1,2,3,4,5,7,8,9];


// const tab5 = [];
// tab.forEach(ch => tab5.push(ch * 5));
// // console.log(tab5);

// const newTab = tab5.filter(ch => ch > 20);
// // console.log(newTab);

// // map



// const result = tab.map(ch => ch * 5).filter(ch => ch > 20)
// console.log(result);