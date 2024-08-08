document.addEventListener("DOMContentLoaded", function () {
    // SELECT INPUT elements
    const firstNameInput = document.getElementById("first-name");

    // SELECT DATA ATTRIBUTES
    const firstNameError = document.querySelector(
        "[data-error='first-name-error']"
    );
    const firstNameSuccessIcon = document.querySelector(
        "[data-success-icon='first-name-success']"
    );

    // Debugging Logs for First Name
    console.log("First Name Input:", firstNameInput);
    console.log("First Name Error:", firstNameError);
    console.log("First Name Success Icon:", firstNameSuccessIcon);

    if (!firstNameError) {
        console.error("firstNameError element not found");
    }

    if (!firstNameSuccessIcon) {
        console.error("firstNameSuccessIcon element not found");
    }

    // EVENT HANDLER: First Name Input
    firstNameInput.addEventListener("input", () => {
        const firstNameValue = firstNameInput.value;
        const isFirstNameValid = validateFirstName(firstNameValue);

        // CHECK result of validation
        if (isFirstNameValid) {
            firstNameInput.classList.add("form__input--valid");
            firstNameInput.classList.remove("form__input--invalid");
            firstNameError.style.display = "none";
            firstNameSuccessIcon.style.display = "inline-block";
        } else {
            firstNameInput.classList.add("form__input--invalid");
            firstNameInput.classList.remove("form__input--valid");
            firstNameError.textContent = "x You sure?";
            firstNameError.style.display = "block";
            firstNameSuccessIcon.style.display = "none";
        }
    });

    // FUNCTION: VALIDATE firstName
    const validateFirstName = (firstName) => {
        const firstNameRegex = /^[a-z ,.'-]+$/i;
        const isFirstNameValid = firstNameRegex.test(firstName);
        console.log("First Name validation result:", isFirstNameValid);
        return isFirstNameValid;
    };
});
