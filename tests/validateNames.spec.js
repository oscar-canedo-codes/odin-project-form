import { validateNames } from "../src/js/validateNames";

describe("validateNames", () => {
    it("should return false for a name with numbers", () => {
        expect(validateNames("John123")).toBe(false);
    });

    it("should return false for a name with special characters", () => {
        expect(validateNames("John#Doe")).toBe(false);
    });

    it("should return false for an empty name", () => {
        expect(validateNames("")).toBe(false);
    });

    it("should return true for a valid name with spaces", () => {
        expect(validateNames("John Doe")).toBe(true);
    });

    it("should return true for a name with an apostrophe", () => {
        expect(validateNames("'O'Brien'")).toBe(true);
    });

    it("should return true for a name with a hyphen", () => {
        expect(validateNames("Smith-Johnson")).toBe(true);
    });
});
