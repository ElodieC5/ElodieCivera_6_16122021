
// (2) Create photographer_section into index page

    async function displayData() {
        const { photographers } = allData;
        const photographersSection = document.querySelector(".photographer_section");

        // Create individual card into index page for each photographer
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };


