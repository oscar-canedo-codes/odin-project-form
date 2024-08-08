function validateForm() {
    const form = document.querySelector('.form');
    const requiredFields = ['first-name', 'last-name', 'email', 'password', 'confirm-password'];

    let isValid = true;

    requiredFields.forEach(field => {
        const input = form.querySelector(`#${field}`);
        if (input.value.trim() === '') {
            input.classList.add('form__input--invalid');
            isValid = false;
        } else {
            input.classList.remove('form__input--invalid');
        }
    });

    // Email validation 
    const emailInput = form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('form__input--invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('form__input--invalid');
    }

    // Password match
    const passwordInput = form.querySelector('#password');
    const confirmPasswordInput = form.querySelector('#confirm-password');
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add('form__input--invalid');
        confirmPasswordInput.classList.add('form__input--invalid');
        isValid = false;
    } else {
        passwordInput.classList.remove('form__input--invalid');
        confirmPasswordInput.classList.remove('form__input--invalid');
    }

    return isValid;
}