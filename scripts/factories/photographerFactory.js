// let photographerModel;

// Create Photographer Card 
function photographerFactory(params1) {

    // Destructuring "allData" parameter to assign variables to properties
    const { name, id, city, country, tagline, price, portrait} = params1;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const linkTo = `photographer.html?id=${id}`;
    
    // Create photographer card into index page
    function getCardDOM() {
        
        const article = document.createElement( "article" );
        
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
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("prix");

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pLoc);
        article.appendChild(pTag);
        article.appendChild(pPrice);
        return (article);
    }

    // ??? Tentative de créer une section dans page photographer sans faire de fetch ???
    // function getPhotographerCardDOM () {
    //     const article = document.createElement( "article" );
        
    //     const img = document.createElement( "img" );
    //     img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
    //     img.setAttribute("alt", " ");
    //     img.setAttribute("aria-label", name);
        
    //     article.appendChild(img);

    //     return (article);
    // }

    // ??? initialement seulement return {name, picture, getCardDOM} - ici tentative d'accéder à l'objet entier de partout ???
    return photographerModel = { name, id, city, country, tagline, price, linkTo, picture, getCardDOM }
}


// class MoviesFactory {
//     constructor(data, type) {
//         // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
//         if (type === 'oldApi') {
//             return new OldMovie(data)
//         // Sinon retourne-moi le nouveau formatage
//         } else if (type === 'newApi') {
//             return new Movie(data)
//         // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
//         } else {
//             throw 'Unknown type format'
//         }
//     }
//  }

