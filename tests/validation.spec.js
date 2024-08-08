import { validateFirstName } from '../src/js/validateFirstName';

describe('validateFirstName', () => {
    it('should return true for a valid first name', () => {
        expect(validateFirstName('John')).toBe(true);
    });

    it('should return false for a name with numbers', () => {
        expect(validateFirstName('John123')).toBe(false);
    });

    it('should return false for an empty string', () => {
        expect(validateFirstName('')).toBe(false);
    });
});

