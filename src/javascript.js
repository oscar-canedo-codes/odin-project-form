document.addEventListener("DOMContentLoaded", function () {

    const validateField = (inputElement, regex, successMessage, errorMessage) => {
        // SELECT the corresponding error and success elements using the input's id
        const errorElement = document.querySelector(`[data-error='${inputElement.id}-error']`);
        const successIcon = document.querySelector(`[data-success-icon='${inputElement.id}-success']`);

        // HANDLE input event
        inputElement.addEventListener("input", () => {
            // CAPTURE the current value from event
            const inputValue = inputElement.value;
            // CHECK if the value matches the regex pattern
            const isValid = regex.test(inputValue);

            if (isValid) {
                // IF VALID, display the success message and icon
                inputElement.classList.add("form__input--valid");
                inputElement.classList.remove("form__input--invalid");
                errorElement.textContent = "";
                errorElement.style.display = "none";
                successIcon.style.display = "inline-block";
            } else {
                // IF NOT VALID, display the error message
                inputElement.classList.add("form__input--invalid");
                inputElement.classList.remove("form__input--valid");
                errorElement.textContent = errorMessage;
                errorElement.style.display = "block";
                successIcon.style.display = "none";
            }
        });
    };

    // DISPLAY messages:
    const successNameMessage = "✔️ Nice name";
    const errorNameMessage = "x You sure?";

    const successEmailMessage = "✔️ Valid email address";
    const errorEmailMessage = " x invalid email address";

    const succcessPhoneMessage = "✔️ Valid phone number";
    const errorPhoneMessage = "Invalid phone number";

    // VALIDATION patterns and messages
    const nameRegex = /^[a-z ,.'-]+$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    // APPLY validation to fields
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // INVOKE method passing through input values from selected fields
    validateField(firstNameInput, nameRegex, successNameMessage, errorNameMessage);
    validateField(lastNameInput, nameRegex, successNameMessage, errorNameMessage);
    validateField(emailInput, emailRegex, successEmailMessage, errorEmailMessage);
    validateField(phoneInput, phoneRegex, succcessPhoneMessage, errorPhoneMessage);
});



