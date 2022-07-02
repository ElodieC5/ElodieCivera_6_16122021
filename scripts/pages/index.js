//  -------------------------------------------------------
//  Script for the index page
//  Display all available photographers
//  -------------------------------------------------------


async function displayData() {

	// Call the fetch function & destructure the photographers' object
	// eslint-disable-next-line no-undef
	const { photographers } = await getPhotographers();

	// Display individual cards inside the DOM "photographer section" for each photographer
	const photographersSection = document.querySelector(".photographer_section");
    
	// Loop calling the photographerFactory (and its getCardDOM method) for each photographer
	photographers.forEach((photographer) => {
		// eslint-disable-next-line no-undef
		const photographerModel = photographerFactory(photographer);
		const CardDOM = photographerModel.getCardDOM();
		photographersSection.appendChild(CardDOM);
	});
}

displayData();

