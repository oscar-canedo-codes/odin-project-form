export function validateNames(firstName, lastName) {
    const nameRegex = /^[a-z ,.'-]+$/i;
    return nameRegex.test(firstName, lastName);
}