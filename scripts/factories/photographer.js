function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
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