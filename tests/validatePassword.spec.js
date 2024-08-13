import { validatePassword } from "../src/js/validatePassword";


describe('validatePassword Function Tests', () => {
    // Passing Tests
    describe('Passing Scenarios', () => {
        test('Valid password with matching confirmation: "Password1!"', () => {
            const password = "Password1!";
            const confirmPassword = "Password1!";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(true);
            expect(result.doPasswordsMatch).toBe(true);
        });

        test('Valid password with matching confirmation: "MyPassw0rd#"', () => {
            const password = "MyPassw0rd#";
            const confirmPassword = "MyPassw0rd#";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(true);
            expect(result.doPasswordsMatch).toBe(true);
        });

        test('Valid password with matching confirmation: "Secure$1234"', () => {
            const password = "Secure$1234";
            const confirmPassword = "Secure$1234";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(true);
            expect(result.doPasswordsMatch).toBe(true);
        });
    });

    // Failing Tests
    describe('Failing Scenarios', () => {
        test('Invalid password (no digits or special characters), but matching confirmation', () => {
            const password = "weakpass";
            const confirmPassword = "weakpass";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(false);
            expect(result.doPasswordsMatch).toBe(true);
        });

        test('Valid password, but non-matching confirmation', () => {
            const password = "StrongP@ss1";
            const confirmPassword = "WrongP@ss1";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(true);
            expect(result.doPasswordsMatch).toBe(false);
        });

        test('Invalid password (no special characters), and non-matching confirmation', () => {
            const password = "NoSpecial123";
            const confirmPassword = "NoSpecial1234";
            const result = validatePassword(password, confirmPassword);
            expect(result.isPasswordValid).toBe(false);
            expect(result.doPasswordsMatch).toBe(false);
        });
    });
});
