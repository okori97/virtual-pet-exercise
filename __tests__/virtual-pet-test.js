const Pet = require('../src/virtual-pet')

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Akira")).toBeInstanceOf(Object);
    });
});