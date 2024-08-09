document.addEventListener("DOMContentLoaded", function () {
    /* SELECT DOM NODES */
    const buttons = document.querySelectorAll("[data-carousel-button]");
    const indicators = document.querySelectorAll(".carousel__indicator");

    /* STATE MANAGEMENT */
    let autoSlideInterval;

    // FUNCTION ->
    // SET active slide
    // UPDATE corresponding indicators
    const setActiveSlide = (newIndex) => {
        /* DOM NODES: data attributes */
        const slides = document.querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        /* REMOVE/SET: data attribute to active */
        activeSlide.removeAttribute("data-active");
        slides.children[newIndex].setAttribute("data-active", "true");

        // UPDATE indicators
        indicators.forEach((indicator, index) => {
            if (index === newIndex) {
                indicator.classList.add("current-slide");
            } else {
                indicator.classList.remove("current-slide");
            }
        });
    };

    /* HANDLERS: BUTTON/INDICATOR CLICKS */

    // FUNCTION ->
    // SET the event listener
    // HANDLE button clicks
    // FIND the carousel and slides
    // IDENTIFY the active slide
    // CALCULATE the new index
    // HANDLE index boundaries
    // UPDATE active slide

    const handleButtonClick = (event) => {
        const button = event.currentTarget;
        /*  'offset' determines the direction in which the carousel should move, (1 = next ; -1 = previous): */
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            /* .closest() -> Finds the nearest ancestor element with the attribute, because the button is inside the carousel and we need to find the slides within the specific carousel that the button belongs to. */
            .closest("[data-carousel]")
            .querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");

        /* [...slides.children] converts this HTMLCollection into an array. */
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        /* slides.children gives us an HTMLCollection of all slide elements. */
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        setActiveSlide(newIndex);
    };
    const handleIndicatorClick = (event) => {
        const indicator = event.currentTarget;
        const newIndex = [...indicators].indexOf(indicator);

        setActiveSlide(newIndex);
    };
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", handleIndicatorClick);
    });

    let autoAdvanceSlides = () => {
        const slides = document.querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        const currentIndex = [...slides.children].indexOf(activeSlide);
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        setActiveSlide(newIndex);
    };

    autoAdvanceSlides = setInterval(autoAdvanceSlides, 5000);

    document
        .querySelector("[data-carousel]")
        .addEventListener("mouseenter", () => {
            clearInterval(autoSlideInterval);
        });

    document
        .querySelector("[data-carousel]")
        .addEventListener("mouseleave", () => {
            autoSlideInterval = setInterval(autoAdvanceSlides, 5000);
        });


    /* Validation: Names */

    /* First Name */
    const firstNameInput = document.getElementById("first-name");

    /* Last Name */
    const lastNameInput = document.getElementById("last-name");

    /* SELECT DATA ATTRIBUTES */

    /* First Name */
    const firstNameError = document.querySelector("[data-error='first-name-error']");
    const firstNameSuccessIcon = document.querySelector("[data-success-icon='first-name-success']");

    /* Last Name */
    const lastNameError = document.querySelector("[data-error='last-name-error']");
    const lastNameSuccessIcon = document.querySelector("[data-success-icon='last-name-success']");

    // Debugging Logs
    console.log("First Name Input:", firstNameInput);
    console.log("First Name Error:", firstNameError);
    console.log("First Name Success Icon:", firstNameSuccessIcon);

    if (!firstNameError) {
        console.error("firstNameError element not found");
    }

    if (!firstNameSuccessIcon) {
        console.error("firstNameSuccessIcon element not found");
    }

    /* EVENT HANDLER: First Name Input */
    firstNameInput.addEventListener("input", () => {
        // CAPTURE value from email input field
        const firstNameValue = firstNameInput.value;

        // PASS value to validation function
        const isFirstNameValid = validateFirstName(firstNameValue);


        //CHECK result of validation
        if (isFirstNameValid) {
            // IF valid, ADD valid class, UPDATE error message, and SHOW success icon
            firstNameInput.classList.add("form__input--valid");
            firstNameInput.classList.remove("form__input--invalid");
            firstNameError.textContent = "✔️ Nice name";
            firstNameError.style.display = "none";
            firstNameSuccessIcon.style.display = "inline-block";
        } else {
            //IF invalid, ADD invalid class, UPDATE error message, and HIDE success icon
            firstNameInput.classList.add("form__input--invalid");
            firstNameInput.classList.remove("form__input--valid");
            firstNameError.textContent = "𝘅 You sure that's right?";
            firstNameError.style.display = "block";
            firstNameSuccessIcon.style.display = "none";
        }
    });

    // FUNCTION: VALIDATE firstName
    const validateFirstName = (firstName) => {
        const firstNameRegex = /^[a-z ,.'-]+$/i;

        // TEST email string against REGEX and STORE result
        const isFirstNameValid = firstNameRegex.test(firstName);

        // LOG the result of validation
        console.log("First Name validation result:", isFirstNameValid);

        // RETURN the result of the validation
        return isFirstNameValid;
    };

    /* Validation: Email */


    // SELECT input element
    const emailInput = document.getElementById("email");

    /* SELECT DATA ATTRIBUTES */
    const emailError = document.querySelector("[data-error='email-error']");
    const emailSuccessIcon = document.querySelector("[data-success-icon='email-success']");

    /* Event Handler: Email Input */
    emailInput.addEventListener("input", () => {
        // CAPTURE value from email input field
        const emailValue = emailInput.value;

        // PASS value to validation function
        const isValid = validateEmail(emailValue);

        /* Console Logs */
        //LOG email value
        console.log("Email value:", email);
        // LOG validity flag
        console.log("isValid:", isValid);

        //CHECK result of validation
        if (isValid) {
            // IF valid, ADD valid class, UPDATE error message, and SHOW success icon
            emailInput.classList.add("form__input--valid");
            emailInput.classList.remove("form__input--invalid");
            emailError.textContent = "";
            emailError.style.display = "none";
            emailSuccessIcon.style.display = "inline-block";
        } else {
            //IF invalid, ADD invalid class, UPDATE error message, and HIDE success icon
            emailInput.classList.add("form__input--invalid");
            emailInput.classList.remove("form__input--valid");
            emailError.textContent = "𝘅 Invalid email address";
            emailError.style.display = "block";
            emailSuccessIcon.style.display = "none";
        }
    });

    // FUNCTION: VALIDATE email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // TEST email string against REGEX and STORE result
        const isValid = emailRegex.test(email);

        // LOG the result of validation
        console.log("Email validation result:", isValid);

        // RETURN the result of the validation
        return isValid;
    };
});
