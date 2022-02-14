
//

const searchParams = new URLSearchParams(window.location.search);
const photographerId = searchParams.get("id");

window.addEventListener("load", () => {

    console.log(photographerId);
    
});

function displayData() {
    const { photographers, media } = allData;
    const photographersSection = document.querySelector(".photograph-header");
    
    const selectedPhotographer = photographers.filter(
        (elt) => elt.id == photographerId
        )
        console.log(selectedPhotographer);
        console.log(photographers);
        
            const img = document.createElement( "img" );
            img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
            img.setAttribute("alt", " ");
            img.setAttribute("aria-label", `${selectedPhotographer.name}`);
            
            photographersSection.appendChild(img);
            
            return (photographersSection);
    // }
};


    // // Create individual card into index page for each photographer
    // photographers.forEach((photographer) => {
    //     const photographerModel = photographerFactory(photographer);
    //     const CardDOM = photographerModel.getPhotographerCardDOM();
    //     photographersSection.appendChild(CardDOM)
        
    // });
    // };
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
