
//     Script for the photographer page (dedicated to a selected photographer)
//     Display the photographer card and all of his/her work
//     -------------------------------------------------------------------------------------------


//  collect the ID attached to the selected photographer

const searchParams = new URLSearchParams(window.location.search);
const photographerIdUrl = Number(searchParams.get("id"));
let mediaList = [];
let mediaLikes = [];


async function displayData() {

    //  Call fetch function & destructure the photographers & medias

    const { photographers, media } = await getPhotographers();
    
    
    //  Collect the selected photographer and his/her works through filter on ID & destructure it
    
    const [selectedPhotographer] = photographers.filter(photographer => photographer.id === photographerIdUrl);
    
    mediaList = media.filter(media => media.photographerId === photographerIdUrl);
    
    
    //  Call the photographerFactory (and its getCardDOM method) for the selected photographer
    
    const photographerModel = photographerFactory(selectedPhotographer);
    const CardDOM = photographerModel.getCardDOM();
    
    
    //  Display card inside the DOM "photograph-header" for selected photographer
    
    const photographerSection = document.querySelector(".photograph-header");
    photographerSection.appendChild(CardDOM);
    
    const link = document.querySelector("article > a");
    link.remove();
    
    const img = document.createElement( "img" );
    img.setAttribute("src", `assets/photographers/Photographers ID Photos/${selectedPhotographer.portrait}`);
    img.setAttribute("alt", " ");
    img.setAttribute("aria-label", selectedPhotographer.name);
    
    const h2 = document.createElement( "h2" );
    h2.textContent = selectedPhotographer.name;
    
    const pPrice = document.querySelector( "p.prix" );
    
    
    const article = document.querySelector( "article" );
    article.appendChild(img);
    article.appendChild(h2);
    
    
    //  Display media cards inside the DOM "medias-wrapper"
    
    const mediaSection = document.querySelector(".medias-wrapper");
    
    mediaList.forEach(media => {
        const template = 
        new MediaCard(selectedPhotographer, media).createMediaCard();
        mediaSection.innerHTML += template;
    });
    
	function totalLikes() {
        
        let nbLikes = 0;
        
		mediaList.map(media => {
            nbLikes = nbLikes + media.likes;
		});

        
		pPrice.insertAdjacentHTML(
            "afterbegin",
			// `<div id="totalLikes">${nbLikes} <img class='totalLikes' src='assets/icons/heartBlack.svg'/></div>`
            `<div id="totalLikes">
            <div class="total">${nbLikes} </div>
            <img class='totalLikes' src='assets/icons/heartBlack.svg' />
            </div>`
            );
            
        }
        
        totalLikes();
        
        function sortData(sortParams) {

            const mediaThumbnails = [...document.querySelectorAll(".media-thumbnail")];
            let sortResults;

            // mediaThumbnails.map(media => {
            //     console.log(media.querySelector(".container-number").innerText);
            //     console.log(media.querySelector("h3").getAttribute("data-date"));
            //     console.log(media.querySelector("h3").innerText);
            // });
            
            
            
            switch (sortParams) {
                
                case "popularity" :
                    
        console.log(mediaList);
                    mediaThumbnails.sort(function(a, b) {
                    return a.querySelector(".container-number").innerText - b.querySelector(".container-number").innerText;   
                });

                    mediaThumbnails.forEach(media => {
        console.log(media.querySelector(".container-number").getAttribute("data-idmedia"));
                });

// console.log(mediaList[0].id);
// console.log(mediaThumbnails[0].querySelector(".container-number").getAttribute("data-idmedia"));

                    mediaList.sort(function (a, b) {
                        
                        for (let i = 0; i < mediaList.length; i++) {
                            if (a.id == mediaThumbnails[i].querySelector(".container-number").getAttribute("data-idmedia")) {
                                console.log(mediaThumbnails.indexOf(mediaThumbnails[i]));
                                mediaList.indexOf(a) == mediaThumbnails.indexOf(mediaThumbnails[i])
                            }
                        
                        
                        }
                    })
        console.log(mediaList);
                // mediaList.forEach(media => {
                //     let i = 0;
                //     if (media.id == mediaThumbnails[i].querySelector(".container-number").getAttribute("data-idmedia")) {
                //         console.log(mediaList = mediaThumbnails.indexOf(i));
                //     } else {
                //         console.log("something wrong");
                //     }
                // })
                
        console.log(mediaThumbnails);

                // mediaThumbnails.map(x => console.log(x.querySelector(".container-number").innerText));
        
                break;
                    
                case "date" : 
                
                    mediaThumbnails.sort(function(a, b) {
                        let dateA = new Date(a.querySelector("h3").getAttribute("data-date")), dateB = new Date(b.querySelector("h3").getAttribute("data-date"));
                        return dateA - dateB;
                    });
                    mediaThumbnails.map(x => console.log(x.querySelector("h3").getAttribute("data-date")));
                break;
                
                case "title" :
                    
                    mediaThumbnails.sort(function(a, b) {
                        let titleA = a.querySelector("h3").innerText.toLowerCase(), titleB = b.querySelector("h3").innerText.toLowerCase();
                        if (titleA < titleB) return -1;
                        if (titleA > titleB) return 1;
                        return 0;
                    });
                    mediaThumbnails.map(x => console.log(x.querySelector("h3").innerText));
                break;

                default: console.log("something's wrong");
                break;
        }
    }
    sortData("popularity");
    // sortData("date");
    // sortData("title");
    
};

displayData();


