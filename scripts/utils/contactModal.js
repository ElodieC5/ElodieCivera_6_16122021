//  -------------------------------------------------------
//  Script to display the Contact Modal
//  -------------------------------------------------------

// eslint-disable-next-line no-unused-vars
function contactModal() {
	const modal = document.querySelector("#contact_modal");
	const modalOpen = document.querySelector(".contact_open");
	const close = document.querySelector(".close");
	const userInputs = document.querySelectorAll("input");
	const submit = document.getElementById("submit");

	const regChar =
		/^[A-Za-za-zàâçéèêëîïôûùüÿñæœ.;:!<>#$%&'*+/=?^_`{|}~-]{2,25}$/;
	const regEmail =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

	//	Open & close modal
	modalOpen.addEventListener("click", displayModal);
	modalOpen.addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			displayModal();
		}
	});
	modal.addEventListener("keyup", function (e) {
		if (e.key === "Escape") {
			closeModal();
		}
	});
	userInputs.forEach((input) => {
		input.addEventListener("keyup", function (e) {
			if (e.key === "Escape") {
				closeModal();
			}
		});
	});
	close.addEventListener("click", closeModal);
	close.addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			closeModal();
		}
	});

	submit.addEventListener("click", checkInput);

	//  Display Modal function
	function displayModal() {
		const whichPhotographer = document.querySelector(".photographer-contact");
		const id = document.querySelector(".photograph-header article > h1");
		whichPhotographer.textContent = id.textContent;
		modal.style.display = "block";
		whichPhotographer.focus();
	}

	//  Close Modal function
	function closeModal() {
		modal.style.display = "none";
		document.getElementById("form").reset();
	}

	// FORM validation
	// -----------------------------------------------------
	// when form is sumitted (or while inputs are filled in), each user's input is checked & customized error message eventually pop-up

	// value of the "data-error" attribute is the error message, the error class prevents the final validation
	function setErrorMessage(input, message) {
		input.parentElement.setAttribute("data-error", message);
		input.parentElement.setAttribute("data-error-visible", "true");
		input.parentElement.classList.add("error");
	}

	// no message when everything is fine, remove the "error" class in case it has been corrected afterwards
	function setSuccessMessage(input) {
		input.parentElement.removeAttribute("data-error");
		input.parentElement.removeAttribute("data-error-visible");
		input.parentElement.classList.remove("error");
	}

	// prevent submitting while inputs are validated
	function checkInput(e) {
		let i = 0;
		e.preventDefault();

		// each input is switched as per its name and then its value is checked
		userInputs.forEach((input) => {
			let inputName = input.name;
			let inputValue = input.value;

			// if value does not match validation requirement then call function setErrorMessage
			// else call setSuccessMessage
			switch (inputName) {
			case "firstName":
				if (!regChar.test(inputValue)) {
					setErrorMessage(input, "Veuillez entrer au moins 2 lettres");
				} else {
					setSuccessMessage(input);
					i = i + 1;
				}
				break;

			case "lastName":
				if (!regChar.test(inputValue)) {
					setErrorMessage(input, "Veuillez entrer au moins 2 lettres");
				} else {
					setSuccessMessage(input);
					i = i + 1;
				}
				break;

			case "email":
				if (!regEmail.test(inputValue)) {
					setErrorMessage(input, "Veuillez vérifier votre adresse e-mail");
				} else {
					setSuccessMessage(input);
					i = i + 1;
				}
				break;

			case "message":
				if (!regChar.test(inputValue)) {
					setErrorMessage(input, "Veuillez entrer au moins 2 lettres");
				} else {
					setSuccessMessage(input);
					i = i + 1;
				}
				break;
			}
			if (i === 4) {
				// console.log([...userInputs].map(input => input.value));
				let results = Array.from(userInputs);
				results.map((input) => {
					console.log(input.value);
				});
				closeModal();
			}
		});
	}
}
