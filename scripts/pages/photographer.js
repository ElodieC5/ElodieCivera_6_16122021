
//

const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = searchParams.get("id");

async function displayData() {

    const { photographers, media } = await getPhotographers();
    // console.log(media);
    
    const selectedPhotographers = photographers.filter(
        (photographer) => photographer.id == photographerIdUrl
        );
    const selectedPhotographer = selectedPhotographers[0];
    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();
    
    const photographersSection = document.querySelector(".photograph-header");
    photographersSection.appendChild(CardDOM);
    
    const link = document.querySelector("article > a");
    link.remove();
    
    const picture = `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`;
    const img = document.createElement( "img" );
    img.setAttribute("src", picture);
    img.setAttribute("alt", " ");
    img.setAttribute("aria-label", selectedPhotographer.name);
    
    const h2 = document.createElement( "h2" );
    h2.textContent = selectedPhotographer.name;
    
    const article = document.querySelector("article");
    article.appendChild(img);
    article.appendChild(h2);  

    const mediaWrapper = document.querySelector(".medias-wrapper");
    
    const mediaList = media.filter(
        (media) => media.photographerId == photographerIdUrl
        );

    const mediaSample = mediaList.forEach(element => {
        const template = new MediaCard(selectedPhotographer, element, element.likes).createMediaCard()

        // console.log(template);
        mediaWrapper.appendChild(template)
    });
    
    // // const Template = new MediaCard(selectedPhotographer, mediaSample, 72);
    // console.log(mediaSample);
    
    // const mediasSection = document.querySelector(".medias-wrapper");
    //     mediasSection.appendChild(
    //             mediaSample.createMediaCard()
    //         );
        
    // };
    // const mediaSample = media.forEach(item => {}); 
    // mediaList.forEach(element => {
    //     const Template = new MediaCard(selectedPhotographer, element, element.likes);

    //     )
    // });
};

displayData();

// ======================= factory initiale ===============================================
// (1) Collect json data with fetch
// async function getPhotographers() {
//     return fetch("./data/photographers.json")
//     .then(response => response.json())
//     .then(data => data)
// };

// (2) Create photographer_section into index page
// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     // Create individual card for each photographer
//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const CardDOM = photographerModel.getCardDOM();
//         photographersSection.appendChild(CardDOM);
//     });
// };

// (3) Once json data are available (1), the photographer_section is initialized (2)
// async function init() {
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// };

// Call to initialization (3)
// init()
