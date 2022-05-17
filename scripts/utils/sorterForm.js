//  -------------------------------------------------------
//  Script to sort the media cards
//  -------------------------------------------------------


//  Sort the media cards inside the DOM "medias-wrapper" (by "Popularity" by default)
//  -------------------------------------------------------

    async function sortData(sortParams) {
        await displayData();
        const mediaThumbnails = [...document.querySelectorAll(".media-thumbnail")];
        mediaSection.innerHTML = "";

        switch (sortParams) {   
            
            case "popularity" :
                mediaThumbnails.sort(function(a, b) {
                    return a.querySelector(".container-number").innerText - b.querySelector(".container-number").innerText;   
                });
                mediaThumbnails.forEach(media => mediaSection.innerHTML += media.outerHTML); 
                break;
                
            case "date" : 
                mediaThumbnails.sort(function(a, b) {
                    let dateA = new Date(a.querySelector("h3").getAttribute("data-date")), dateB = new Date(b.querySelector("h3").getAttribute("data-date"));
                    return dateA - dateB;
                });
                mediaThumbnails.forEach(media => mediaSection.innerHTML += media.outerHTML); 
                break;
                
            case "title" :
                mediaThumbnails.sort(function(a, b) {
                        let titleA = a.querySelector("h3").innerText.toLowerCase(), titleB = b.querySelector("h3").innerText.toLowerCase();
                        if (titleA < titleB) return -1;
                        if (titleA > titleB) return 1;
                        return 0;
                });
                mediaThumbnails.forEach(media => mediaSection.innerHTML += media.outerHTML); 
                break;

            default :
                mediaThumbnails.sort(function(a, b) {
                    return a.querySelector(".container-number").innerText - b.querySelector(".container-number").innerText;   
                });
                mediaThumbnails.forEach(media => mediaSection.innerHTML += media.outerHTML); 
                break;
        }
    }

sortData();  

//  Display sorter menu through...
//  -------------------------------------------------------

const dropdownHidden = document.getElementById("current-order");
const dropdownVisible = document.getElementById("options-order");
const byPopularity = dropdownVisible.querySelector("button[data-order='popularity']");
const byDate = dropdownVisible.querySelector("button[data-order='date']");
const byTitle = dropdownVisible.querySelector("button[data-order='title']");

function toggleMenu() {
    dropdownHidden.classList.toggle("show");
    dropdownVisible.classList.toggle("show");
};

// Sorting data following user's choice
//  -------------------------------------------------------

dropdownVisible.addEventListener("click", function(event) {
    mediaSection.innerHTML = "";

    switch (event.target) {
        case byDate:
            dropdownHidden.innerText = "Date";
            sortData("date");
            break;
            
        case byPopularity:
            dropdownHidden.innerText = "Popularité";
            sortData("popularity");
            break;
                
        case byTitle:
            dropdownHidden.innerText = "Titre";
            sortData("title");
            break;

        default:
            console.log("what's happened?");
            break;
    }
});

// Close the dropdown menu if the user clicks outside of it
//  -------------------------------------------------------

window.onclick = function(event) {
    if (event.target != dropdownHidden && event.target != dropdownVisible) {
        dropdownHidden.classList.remove("show");
        dropdownVisible.classList.remove("show");
    }
}

