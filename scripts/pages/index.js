
//      Script for the index page
//      Display all available photographers
//      -------------------------------------------------------------------------------------------


async function displayData() {

    // call the fetch function & destructure the photographers
    const { photographers } = await getPhotographers();

    // display individual cards inside the DOM "photographer section" for each photographer
    const photographersSection = document.querySelector(".photographer_section");
    
    // loop calling the photographerFactory (and its getCardDOM method) for each photographer
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const CardDOM = photographerModel.getCardDOM();
        photographersSection.appendChild(CardDOM);
        });
    };

displayData();

