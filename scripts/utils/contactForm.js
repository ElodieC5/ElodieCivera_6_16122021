function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const whichPhotographer = document.querySelector(".photographer-contact");
    const id = document.querySelector(".photograph-header article > h2");
    whichPhotographer.textContent = id.textContent;
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


// // DOM Elements & RegEx
// // -----------------------------------------------------
// // modalbg: modal bckg, modalBtn: 2 btn to launch
// // formData: div with inputs, span: (x) to close

// const modalbg = document.querySelector(".bground");
// const modalBtn = document.querySelectorAll(".modal-btn");
// const formDataList = document.querySelectorAll(".formData");
// const close = document.querySelector(".close");
// const userInputs = document.querySelectorAll("input");
// const locationElts = document.querySelectorAll("input[name='location']");
// const submit = document.querySelector(".btn-submit");

// const regChar = /^[A-Za-z]{2,25}$/;
// const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
// const regDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
// const regNumber = /^\d+$/;
// let participation;


// // FORM validation
// // -----------------------------------------------------
// // when form is sumitted (or while inputs are filled in), each user's input is checked & customized error message eventually pop-up

// submit.addEventListener("click", checkInput);

// userInputs.forEach(input => input.addEventListener('keyup', checkInput));

// // value of the "data-error" attribute is the error message, the error class prevents the final validation

// function setErrorMessage(input, message) {
//   input.parentElement.setAttribute("data-error", message);
//   input.parentElement.setAttribute("data-error-visible", "true");
//   input.parentElement.classList.add("error");
// }

// // no message when everything is fine, remove the "error" class in case it has been corrected afterwards

// function setSuccessMessage(input) {
//   input.parentElement.removeAttribute("data-error");
//   input.parentElement.removeAttribute("data-error-visible");
//   input.parentElement.classList.remove("error"); 
// }

// // prevent submitting while inputs are validated

// function checkInput(e) {
//   e.preventDefault();

// // each input is switched as per its name and then its value is checked

//   userInputs.forEach(input => {
//     let inputName = input.name;
//     let inputValue = input.value;
  
// // if value does not match validation requirement then call function setErrorMessage
// // else call setSuccessMessage

//     switch (inputName) {

//   case "first" :
//     if (!regChar.test(inputValue)) {
//       setErrorMessage(input, "Veuillez entrer au moins 2 lettres");
//     } else {
//         setSuccessMessage(input);
//     }
//     break;

//   case "last" :
//     if (!regChar.test(inputValue)) {
//       setErrorMessage(input, "Veuillez entrer au moins 2 lettres");
//     } else {
//         setSuccessMessage(input);
//     }
//     break;

//   case "email" :
//     if (!regEmail.test(inputValue)) {
//       setErrorMessage(input, "Veuillez vérifier votre adresse e-mail");
//     } else {
//         setSuccessMessage(input);
//     }
//     break;

//   case "birthdate" :
//     if (!regDate.test(inputValue)) {
//       setErrorMessage(input, "Veuillez vérifier votre date de naissance");
//     } else {
//         setSuccessMessage(input);
//     }
//     break;

//   case "quantity" :
//     let a = Number(inputValue);
//     participation = a;
//     if (!regNumber.test(a) || Number(a) > 99 || inputValue ==="") {
//       setErrorMessage(input, "Combien de fois avez-vous participé ?");
//     } else {
//         setSuccessMessage(input);
//     }
//     break;

//   case "location" :
//     let checkboxChecked = 0;
//     locationElts.forEach(locationElt => {
//       if (locationElt.checked) {
//         checkboxChecked++;
//       }
//     });

//     if (checkboxChecked > 0 && participation > 0) {
//       setSuccessMessage(input);
//     } else if (checkboxChecked === 0 && participation === 0) {
//       setSuccessMessage(input);
//     } else if (checkboxChecked > 0 && participation === 0) {
//       setErrorMessage(input, "Si c'est votre 1ère participation, ne cochez rien");
//     } else {
//           setErrorMessage(input, "Veuillez préciser dans quelle ville");
//     }
//     break;

//     case "cgu" :
//       if (input.checked) {
//         setSuccessMessage(input);
//       } else {
//         setErrorMessage(input, "Veuillez accepter nos conditions d'utilisation");
//       }
//     }
//   });

// // final loop checking no uncorrected error remaining and final form validation

// let ilYaUneErreur = 0;
//   formDataList.forEach(formData => {
//     if (formData.classList.contains("error")) {
//       ilYaUneErreur++;
//     }
//   });

// if (ilYaUneErreur === 0) {

//   const validation = document.querySelector(".content");
//   const finalMessage = document.createElement("div");
//   const finalButton = document.createElement("button");

//   validation.classList.add("final");
//   finalMessage.textContent = 'Votre inscription est bien enregistrée. Merci et à bientôt pour le "GameOn" !';
//   finalButton.textContent="Fermer";
//   finalButton.classList.add("btn-signup");

//   validation.appendChild(finalMessage);
//   validation.appendChild(finalButton);

//   finalButton.addEventListener("click", closeModal);

//   };
// }
  