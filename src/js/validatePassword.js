export function validatePassword(password, confirmPassword) {
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const isPasswordValid = passwordRegex.test(password);
    const doPasswordsMatch = password === confirmPassword;

    return {
        isPasswordValid,
        doPasswordsMatch
    }

}
