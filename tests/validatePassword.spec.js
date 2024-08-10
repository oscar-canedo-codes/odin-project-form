import { validatePassword } from "../src/js/validatePassword";

describe("validatePassword", () => {
    it("should return true for passwords with 6 or more characters", () => {
        expect(validatePassword("P123$")).toBe(true);
    });
});
