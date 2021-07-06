const Pet = require('../src/pet');

it("returns an object", () => {
    expect(new Pet("Akira")).toBeInstanceOf(Object);

});

it("it sets the name property", () => {
    let pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
});

describe("Create a Pet", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
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
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
    })

    it("growUp() increases age by 1", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});

describe("Grow old and unhealthy", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
    });

    it("Deceases fitness by 3", () => {
        expect(pet.fitness).toBe(10)
        pet.growUp();
        pet.feed();
        expect(pet.fitness).toEqual(7);
        pet.growUp();
        pet.feed();
        expect(pet.fitness).toEqual(4);
    });

    it("Increases hunger by 5", () => {
        expect(pet.hunger).toEqual(0);
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        pet.growUp();
        expect(pet.hunger).toEqual(10);
    })

})



describe("Go for a walk", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
        pet.growUp();
        pet.feed();
        pet.growUp();
    })

    it("increases fitness by 4", () => {
        expect(pet.fitness).toBe(4);
        pet.walk();
        expect(pet.fitness).toBe(8);
    })

    it("Fitness level should not increase past the set limit", () => {
        pet.walk();
        pet.walk();
        expect(pet.fitness).toBe(10);

    })
});

describe("Eating food", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
        pet.growUp();
        pet.feed();
        pet.growUp();
    })

    it("should decrease hunger by 3", () => {
        expect(pet.hunger).toEqual(7);
        pet.feed();
        expect(pet.hunger).toEqual(4);

    })

    it("Hunger cannot decrease below 0", () => {
        expect(pet.hunger).toEqual(7);

        pet.feed();
        pet.feed();
        pet.feed();

        expect(pet.hunger).toEqual(0);
    })

});



describe(`Check-Up! - How are you feeling?`, () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Logan');
    });

    it(`checks levels of the pet.`, () => {
        pet.growUp();
        expect(pet.checkUp()).toEqual('I am hungry');
        pet.feed();
        pet.growUp();
        expect(pet.checkUp()).toEqual('I am hungry');
        pet.feed();
        pet.growUp();
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    it(`checks if the pet is ok!`, () => {
        expect(pet.checkUp()).toEqual('I feel great!');
    });
});

describe("Is pet Alive?", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Akira');
    });

    it("checks if pet is alive", () => {
        expect(pet.isAlive).toBe(true);
    })

    it("if we grow and dont eat we die", () => {
        pet.growUp();
        pet.growUp();
        expect(pet.isAlive).toBe(false);
    })

    it("if we grow and dont walk we die", () => {
        pet.growUp()
        pet.feed()
        pet.growUp()
        pet.feed()
        pet.growUp()
        pet.feed()
        pet.growUp()
        expect(pet.isAlive).toBe(false);
    })

    it("If we grow to old we die", () => {
        pet.age = 30;
        expect(pet.isAlive).toBe(false)
    })
});

describe("Error checks", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Kaneda');
        pet.hunger = 0;
        pet.age = 30;
        pet.fitness = 0;
    });

    it("should throw when you try to feed a dead pet", () => {
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
    it("should throw when you try to walk a dead pet", () => {
        expect(pet.walk).toThrow('Your pet is no longer alive :(');
    });
    it("should throw when you try to age a dead pet", () => {
        expect(pet.growUp).toThrow('Your pet is no longer alive :(');
    });
    it("should throw when you try to check up on a dead pet", () => {
        expect(pet.checkUp).toThrow('Your pet is no longer alive :(');
    });
})
    
    
