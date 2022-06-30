//  -------------------------------------------------------
//  Factory to build photographer template
//  Create photographer cards inside index & photographer pages
//  -------------------------------------------------------


function photographerFactory(photographer) {

    // destructure photographer's data to assign variables to properties

    const { name, id, city, country, tagline, price, portrait} = photographer;

    // create photographer cards using template literal
    
    function getCardDOM() {
        
        const img = document.createElement( "img" );
        img.setAttribute("src", `assets/photographers/Photographers ID Photos/${portrait}`);
        img.setAttribute("alt", "Photo du photographe");
        img.setAttribute("aria-label", `Photo représentative de ${name}`);
        
        const h2 = document.createElement( "h2" );
        h2.classList.add("accueil");
        h2.setAttribute("tabindex", "0");
        h2.textContent = name;
        
        const link = document.createElement( "a");
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute("aria-label", `Page de ${name}`);
        
        const pLoc = document.createElement( "p" );
        pLoc.classList.add("lieu");
        pLoc.setAttribute("tabindex", "0");
        pLoc.textContent = `${city}, ${country}`;
        
        const pTag = document.createElement( "p" );
        pTag.classList.add("devise");
        pTag.setAttribute("tabindex", "0");
        pTag.textContent = `${tagline}`;
        
        const pPrice = document.createElement( "p" );
        pPrice.classList.add("prix");
        pPrice.setAttribute("tabindex", "0");
        pPrice.textContent = `${price}€ / jour`;
        
        const article = document.createElement( "article" );
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pLoc);
        article.appendChild(pTag);
        article.appendChild(pPrice);

        // the method returns the photographer card as a DOM article
        return (article);
    }

    // return the "pattern object" (i.e. the photographer's properties and the method to display the associated values) out of the local scope 
    return photographerModel = { name, id, city, country, tagline, price, portrait, getCardDOM };
    
}


