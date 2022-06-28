//  -------------------------------------------------------
//  Script to sort the media cards
//  -------------------------------------------------------


//  Sort the media cards inside the DOM "medias-wrapper" (by "Popularity" by default)
//  -------------------------------------------------------

function sortData(sortParams) {

        switch (sortParams) {   
            
            case "popularity" :
                mediaList.sort(function(a, b) {
                return b.likes - a.likes;   
                });
                break;
                
            case "date" : 
                mediaList.sort(function(a, b) {
                    let dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB;
                });
                break;
                
            case "title" :
                mediaList.sort(function(a, b) {
                        let titleA = a.title, titleB = b.title;
                        if (titleA < titleB) return -1;
                        if (titleA > titleB) return 1;
                        return 0;
                });
                break;
                
                default :
                mediaList.sort(function(a, b) {
                    return b.likes - a.likes;   
                });
                break;
            };
            // re-display the gallery once it has been sorted out :
            createGallery();
    };

//  Display sorter menu through...
//  -------------------------------------------------------

const dropdownHidden = document.getElementById("current-order");
const dropdownVisible = document.getElementById("options-order");
const iconUp = document.getElementById("up")
const iconDown = document.getElementById("down")
const byPopularity = dropdownVisible.querySelector("button[data-order='popularity']");
const byDate = dropdownVisible.querySelector("button[data-order='date']");
const byTitle = dropdownVisible.querySelector("button[data-order='title']");

// function toggleMenu() {
//     dropdownHidden.classList.toggle("show");
//     dropdownVisible.classList.toggle("show");
// };

dropdownHidden.addEventListener('click', (event) => {
    iconUp.classList.add("show");
    iconDown.classList.remove("show");
        dropdownHidden.classList.remove("show");
        dropdownVisible.classList.add("show");
});

// Sorting data following user's choice
//  -------------------------------------------------------

dropdownVisible.addEventListener("click", function(event) {
    mediaSection.innerHTML = "";

    switch (event.target) {
        case byDate:
            dropdownHidden.innerText = "Date";
            sortData("date");
            iconUp.classList.remove("show");
            break;
            
        case byPopularity:
            dropdownHidden.innerText = "Popularité";
            sortData("popularity");
            iconUp.classList.remove("show");
            break;
                
        case byTitle:
            dropdownHidden.innerText = "Titre";
            sortData("title");
            iconUp.classList.remove("show");
            break;

        default:
            console.log("what's happening?");
            break;
    }
});

// Close the dropdown menu if the user clicks outside of it
//  -------------------------------------------------------

document.addEventListener('click', (event) => {
    if (event.target != dropdownHidden && event.target != dropdownVisible) {
        dropdownHidden.classList.add("show");
        dropdownVisible.classList.remove("show");
        iconUp.classList.remove("show");
    }
});
