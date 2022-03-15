function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    

    const whichPhotographer = document.getElementsByClassName("photographer-contact");
    const id = document.querySelector(".photograph-header article > h2");
    whichPhotographer[0].innerHTML = id.innerHTML;
    
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
