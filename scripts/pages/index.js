
// (2) Create photographer_section into index page (calling Factory & CardDOM)
async function displayData() {
    const { photographers } = await getPhotographers();

    // medias.map(media => console.log(media.id));
    // console.log(media[0].id);
        const photographersSection = document.querySelector(".photographer_section");

        // Create individual card into index page for each photographer
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const CardDOM = photographerModel.getCardDOM();
            photographersSection.appendChild(CardDOM);
        });
    };

    displayData();

