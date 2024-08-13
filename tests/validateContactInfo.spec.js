import { validateContactInfo } from '../src/js/validateContactInfo';

describe('validateContactInfo', () => {
    describe('Email Validation', () => {
        test.each([
            ['test@example.com'],
            ['user.name+tag+sorting@example.com'],
            ['x@example.com'],
        ])('should return true for valid email: %s', (email) => {
            const result = validateContactInfo(email, '');
            expect(result.emailIsValid).toBe(true);
        });

        test.each([
            ['plainaddress'],
            ['@missingusername.com'],
            ['username@.com'],
        ])('should return false for invalid email: %s', (email) => {
            const result = validateContactInfo(email, '');
            expect(result.emailIsValid).toBe(false);
        });
    });

    describe('Phone Validation', () => {
        test.each([
            ['+1234567890'],
            ['1234567890'],
            ['+11234567890'],
        ])('should return true for valid phone: %s', (phone) => {
            const result = validateContactInfo('', phone);
            expect(result.phoneIsValid).toBe(true);
        });

        test.each([
            ['123'],
            ['abcd123456'],
            ['+1(234)567-8900'],
        ])('should return false for invalid phone: %s', (phone) => {
            const result = validateContactInfo('', phone);
            expect(result.phoneIsValid).toBe(false);
        });
    });
});
