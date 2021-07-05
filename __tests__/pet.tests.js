const  Pet  = require('../src/pet');

beforeEach(() => {
    pet = new Pet('Fido');
})

describe("Create a Pet", () => {
    it("returns an object", () => {
        expect(new Pet("Akira")).toBeInstanceOf(Object);

    });

    it("it sets the name property", () => {
        let pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it("It creates an age property", () => {
        expect(pet.age).toEqual(0);
    });

    it("It creates an hunger property", () => {
        expect(pet.hunger).toEqual(0);
    });

    it("It creates an fitness property and sets it to 10", () => {
        expect(pet.fitness).toEqual(10);
    });
});



describe("Growing up", () => {

    it("growUp() increases age by 1", () => {
        let pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        pet.growUp();
        expect(pet.age).toEqual(2);
        pet.growUp();
        expect(pet.age).toEqual(3);
    });

    it("Deceases fitness by 3", () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        pet.growUp();
        expect(pet.fitness).toEqual(1);
    });

        it("Increases hunger by 5", () => {
            pet.growUp();
            expect(pet.hunger).toEqual(5);
            pet.growUp();
            expect(pet.hunger).toEqual(10);
            pet.growUp();
            expect(pet.hunger).toEqual(15);
        })

});

describe("Go for a walk", () => {
    
    it("increases fitness by 4", () => {
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(8);
    })

    it("Fitness level should not increase past the set limit", () => {
        pet.walk();
        expect(pet.fitness).toEqual(10);
        pet.walk();
        pet.walk();
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});

describe("Eating food", () => {

    it("should decrease hunger by 3", () => {
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toEqual(4);
    }) 
});

describe("Check up", () => {

    it("should return 'I am hungry' if hunger is equal or greater than 5", () => {
        pet.growUp();
        expect(pet.checkUp()).toBe("I am hungry")
    })
    it("should return 'I need a walk' if fitness is equal or less than 3", () => {
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.feed();
        pet.feed();
        pet.feed();
        pet.feed();
        
        expect(pet.checkUp()).toBe("I need a walk")
    })
    it("should return 'I am hungry AND I need a walk' if both above conditions are true", () => {
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.feed();
        pet.feed();
        
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk")
    })
    it("should return 'I feel great!' if none of the above are true", () => {
        
        expect(pet.checkUp()).toBe("I feel great!")
    })

});
