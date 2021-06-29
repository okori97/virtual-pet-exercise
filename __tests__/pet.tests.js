const { Pet } = require('../src/pet');

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Akira")).toBeInstanceOf(Object);

    });
});

describe("constructor", () => {
    it("it sets the name property", () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

});