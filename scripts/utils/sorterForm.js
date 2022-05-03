
//      Script to display the Sorter Menu
//      -------------------------------------------------------------------------------------------

//  Display Modal is called through...

const dropdownHidden = document.getElementById("current-order")
const dropdownVisible = document.getElementById("options-order")

function toggleMenu() {
    dropdownHidden.classList.toggle("show");
    dropdownVisible.classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
    if (event.target != dropdownHidden && event.target != dropdownVisible) {

        dropdownHidden.classList.remove("show");
        dropdownVisible.classList.remove("show");
        }
    }

