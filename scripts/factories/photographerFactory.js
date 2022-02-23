
// Create Photographer Card 
function photographerFactory(params1) {

    // Destructuring data to assign variables to properties
    const { name, id, city, country, tagline, price, portrait} = params1;

    
    // Create photographer card
    function getCardDOM() {
        
        const article = document.createElement( "article" );
        const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
        const linkTo = `photographer.html?id=${id}`;
        
        const img = document.createElement( "img" );
        img.setAttribute("src", picture);
        img.setAttribute("alt", " ");
        img.setAttribute("aria-label", name);
        
        const h2 = document.createElement( "h2" );
        h2.textContent = name;

        const link = document.createElement( "a");
        link.setAttribute("href", linkTo);
        
        const pLoc = document.createElement( "p" );
        pLoc.classList.add("lieu");
        pLoc.textContent = `${city}, ${country}`;
        
        const pTag = document.createElement( "p" );
        pTag.textContent = `${tagline}`;
        pTag.classList.add("devise");

        const pPrice = document.createElement( "p" );
        pPrice.textContent = `${price}€ / jour`;
        pPrice.classList.add("prix");

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pLoc);
        article.appendChild(pTag);
        article.appendChild(pPrice);
        return (article);
    }

    // ??? initialement seulement return {name, picture, getCardDOM}
    return photographerModel = { name, id, city, country, tagline, price, getCardDOM }
}


