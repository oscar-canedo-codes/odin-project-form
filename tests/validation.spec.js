import { validateFirstName } from '../src/js/validateFirstName';

describe('validateFirstName', () => {
    it('should return true for a valid name', () => {
        const validName = 'John Doe';
        const result = validateFirstName(validName);
        expect(result).toBe(true);
    });

    it('should return false for an invalid name', () => {
        const invalidName = '123';
        const result = validateFirstName(invalidName);
        expect(result).toBe(false);
    });
    it('should return false for an empty string', () => {
        const emptyField = '';
        const result = validateFirstName(emptyField);
        expect(result).toBe(false);
    })
});