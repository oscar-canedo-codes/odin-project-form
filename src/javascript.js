const validateField = (
    inputElement,
    regex,
    successMessage,
    errorMessage,
    confirmPasswordElement = null
) => {
    // SELECT the corresponding error and success elements using the input's id
    const errorElement = document.querySelector(
        `[data-error='${inputElement.id}-error']`
    );
    const successIcon = document.querySelector(
        `[data-success-icon='${inputElement.id}-success']`
    );

    // HANDLE input event
    inputElement.addEventListener("input", () => {
        // CAPTURE the current value from event
        let inputValue = inputElement.value;
        // CHECK if the value matches the regex pattern
        let isValid = regex.test(inputValue);
        let doPasswordsMatch = true;

        // IF element is provided, VALIDATE password match
        if (confirmPasswordElement) {
            const confirmPasswordValue = confirmPasswordElement.value;
            const validationResult = validatePassword(inputValue, confirmPasswordValue);
            isValid = validationResult.isPasswordValid;
            doPasswordsMatch = validationResult.doPasswordsMatch;
        }

        if (isValid && doPasswordsMatch) {
            // IF VALID, display the success message and icon
            inputElement.classList.add("form__input--valid");
            inputElement.classList.remove("form__input--invalid");
            if (errorElement) {
                errorElement.textContent = successMessage;
                errorElement.style.display = "block";
            }
            if (successIcon) {
                successIcon.style.display = "inline-block";
            }
        } else {
            // IF NOT VALID, display the error message
            inputElement.classList.add("form__input--invalid");
            inputElement.classList.remove("form__input--valid");
            if (errorElement) {
                errorElement.textContent = confirmPasswordElement
                    ? errorPasswordConfirmMessage // DISPLAY password confirmation error
                    : errorMessage;
                errorElement.style.display = "block";
            }
            if (successIcon) {
                successIcon.style.display = "none";
            }
        }
    });
};

const validatePassword = (password, confirmPassword) => {
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const isPasswordValid = passwordRegex.test(password);
    const doPasswordsMatch = password === confirmPassword;

    return {
        isPasswordValid,
        doPasswordsMatch
    };
}

// DISPLAY messages:
const successNameMessage = "✔️ Nice name";
const errorNameMessage = "x You sure?";

const successEmailMessage = "✔️ Valid email address";
const errorEmailMessage = " x invalid email address";

const succcessPhoneMessage = "✔️ Valid phone number";
const errorPhoneMessage = "Invalid phone number";

const successPasswordMessage = "✔️ Strong password";
const errorPasswordMessage =
    'x Password must be a minimum of 6 characters, use lower and upper case, and have at least one special character "!@#$%^&*"';

const successPasswordConfirmMessage = "✔️ Passwords match";
const errorPasswordConfirmMessage = "Passwords don't match";

// VALIDATION patterns and messages
const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const passwordConfirmRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// APPLY validation to fields
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("confirm-password");

// INVOKE method passing through input values from selected fields
validateField(firstNameInput, nameRegex, successNameMessage, errorNameMessage);
validateField(lastNameInput, nameRegex, successNameMessage, errorNameMessage);
validateField(emailInput, emailRegex, successEmailMessage, errorEmailMessage);
validateField(phoneInput, phoneRegex, succcessPhoneMessage, errorPhoneMessage);
validateField(passwordInput, passwordRegex, successPasswordMessage, errorPasswordMessage);
validateField(passwordConfirmInput, passwordRegex, successPasswordConfirmMessage, errorPasswordConfirmMessage, passwordInput);
