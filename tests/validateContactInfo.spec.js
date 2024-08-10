import { validateContactInfo } from '../src/js/validateContactInfo';

describe('validateContactInfo', () => {
    describe('Email Validation', () => {
        test('should return true for valid email: "test@example.com"', () => {
            const result = validateContactInfo('test@example.com', '');
            expect(result.emailIsValid).toBe(true);
        });

        test('should return true for valid email: "user.name+tag+sorting@example.com"', () => {
            const result = validateContactInfo('user.name+tag+sorting@example.com', '');
            expect(result.emailIsValid).toBe(true);
        });

        test('should return true for valid email: "x@example.com"', () => {
            const result = validateContactInfo('x@example.com', '');
            expect(result.emailIsValid).toBe(true);
        });

        test('should return false for invalid email: "plainaddress"', () => {
            const result = validateContactInfo('plainaddress', '');
            expect(result.emailIsValid).toBe(false);
        });

        test('should return false for invalid email: "@missingusername.com"', () => {
            const result = validateContactInfo('@missingusername.com', '');
            expect(result.emailIsValid).toBe(false);
        });

        test('should return false for invalid email: "username@.com"', () => {
            const result = validateContactInfo('username@.com', '');
            expect(result.emailIsValid).toBe(false);
        });
    });

    describe('Phone Validation', () => {
        test('should return true for valid phone: "+1234567890"', () => {
            const result = validateContactInfo('', '+1234567890');
            expect(result.phoneIsValid).toBe(true);
        });

        test('should return true for valid phone: "1234567890" without country code', () => {
            const result = validateContactInfo('', '1234567890');
            expect(result.phoneIsValid).toBe(true);
        });

        test('should return true for valid phone: "+11234567890" with country code', () => {
            const result = validateContactInfo('', '+11234567890');
            expect(result.phoneIsValid).toBe(true);
        });

        test('should return false for invalid phone: "123"', () => {
            const result = validateContactInfo('', '123');
            expect(result.phoneIsValid).toBe(false);
        });

        test('should return false for invalid phone: "abcd123456"', () => {
            const result = validateContactInfo('', 'abcd123456');
            expect(result.phoneIsValid).toBe(false);
        });

        test('should return false for invalid phone: "+1(234)567-8900" with parentheses and dashes', () => {
            const result = validateContactInfo('', '+1(234)567-8900');
            expect(result.phoneIsValid).toBe(false);
        });
    });
});
