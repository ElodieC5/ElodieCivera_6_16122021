
//      Script to display the Sorter Menu
//      -------------------------------------------------------------------------------------------

//  Display Modal is called through...

const dropdownHidden = document.getElementById("current-order");
const dropdownVisible = document.getElementById("options-order");
const byPopularity = dropdownVisible.querySelector("button[data-order='popularity']");
const byDate = dropdownVisible.querySelector("button[data-order='date']");
const byTitle = dropdownVisible.querySelector("button[data-order='title']");

function toggleMenu() {
    dropdownHidden.classList.toggle("show");
    dropdownVisible.classList.toggle("show");
};

// Sorting data

dropdownVisible.addEventListener("click", function(event) {
    if (event.target = byDate) {
    displayData();
} else if (event.target = byTitle) {
    displayData();    
} else if (event.target = byPopularity) {
    displayData().sortData("popularity");
} else {
    console.log("what's happened ?");
}
});


// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
    if (event.target != dropdownHidden && event.target != dropdownVisible) {

        dropdownHidden.classList.remove("show");
        dropdownVisible.classList.remove("show");
        }
    }

