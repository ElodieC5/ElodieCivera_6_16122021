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
        img.setAttribute("alt", " ");
        img.setAttribute("aria-label", name);
        
        const h2 = document.createElement( "h2" );
        h2.textContent = name;
        
        const link = document.createElement( "a");
        link.setAttribute("href", `photographer.html?id=${id}`);
        
        const pLoc = document.createElement( "p" );
        pLoc.classList.add("lieu");
        pLoc.textContent = `${city}, ${country}`;
        
        const pTag = document.createElement( "p" );
        pTag.textContent = `${tagline}`;
        pTag.classList.add("devise");
        
        const pPrice = document.createElement( "p" );
        pPrice.textContent = `${price}€ / jour`;
        pPrice.classList.add("prix");
        
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


