// (1) Collect json data with fetch
    async function getPhotographers() {
        return fetch("./data/photographers.json")
        .then(response => response.json())
        .then(data => data)
};

// (2) Create photographer_section into index page
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        // Create individual card for each photographer
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

// (3) Once json data are available (1), the photographer_section is initialized (2)
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
// Call to initialization (3)
    init();
    
