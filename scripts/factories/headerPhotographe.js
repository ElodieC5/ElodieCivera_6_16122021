// eslint-disable-next-line no-unused-vars
const headerPhotographe = (photographe) =>{
	const photographerSection = document.querySelector(".photograph-header");
	photographerSection.innerHTML = `
    <article>
        <h1 class="profil" tabindex="0">${photographe.name}</h1>
        <p class="lieu" tabindex="0">${photographe.city}, ${photographe.country}</p>
        <p class="devise" tabindex="0">${photographe.tagline}</p>
        <button class="contact_button contact_open" tabindex="0">Contactez-moi</button>
        <img src="assets/photographers/Photographers ID Photos/${photographe.portrait}" alt="Photo du photographe" aria-label="Photo représentative de ${photographe.name}" tabindex="0">
    </article>
    `;
};