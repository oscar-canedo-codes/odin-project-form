export function validateContactInfo(email, phone) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    return {
        emailIsValid: emailRegex.test(email),
        phoneIsValid: phoneRegex.test(phone),
    };
}
