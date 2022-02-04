//Mettre le code JavaScript lié à la page photographer.html




window.addEventListener("load", () => {
    const searchParams = new URLSearchParams(window.location.search);
    const photographerId = searchParams.get("id");

    console.log(searchParams);
    console.log(photographerId);

// ??? comment accéder à l'objet photographerModel tjrs undefined alors que reconnu dans page index ???
   photographerFactory (photographerModel[`id: ${photographerId}`]);






    // for (const i of photographerModel) {
    //     if (photographerId === photographerModel.id) {
    //     return photographerModel;
    // //     alert(`this is ${photographerModel.name}`)
    // } else {
    //     alert ("Error")
    // }
    // }

    });






// // (1) Collect json data with fetch
// async function getPhotographers() {
//     return fetch("./data/photographers.json")
//     .then(response => response.json())
//     .then(data => data)
// };

// // (2) Create photographer_section into index page
// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     // Create individual card for each photographer
//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// // (3) Once json data are available (1), the photographer_section is initialized (2)
// async function init() {
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// };

// // Call to initialization (3)
// init()
