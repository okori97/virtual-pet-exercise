
var MAXFITNESS = 10;
var STARVATION = 0;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];

}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.haveChild = function (name) {
    let child = new Pet(`${name}`);
    this.children.push(child);
    return child;
}
Pet.prototype.growUp = function () {
    if (!this.isAlive) { throw "Your pet is no longer alive :("}
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if (!this.isAlive) { throw "Your pet is no longer alive :("}

    if (this.fitness > 7) {
        return this.fitness = 10;
    }
    this.fitness += 4;
}

Pet.prototype.feed = function () {
    if (!this.isAlive) { throw "Your pet is no longer alive :("}

    if (this.hunger < 3) {
        return this.hunger = 0;
    } else {
        return this.hunger -= 3;
    }
}



Pet.prototype.checkUp = function () {
    if (!this.isAlive) { throw "Your pet is no longer alive :("}

    const is_Hungry_And_Unfit_Statement = `I am hungry AND I need a walk`;
    const is_Unfit_Statement = `I need a walk`;
    const is_Hungry_Statement = `I am hungry`;
    const Hungry_And_Unfit = this.hunger >= 5 && this.fitness <= 3;
    const isHungry = this.hunger >= 5;
    const isUnfit = this.fitness < 3;

    if (Hungry_And_Unfit) {
        return is_Hungry_And_Unfit_Statement;
    } else if (isHungry) {
        return is_Hungry_Statement;
    } else if (isUnfit) {
        return is_Unfit_Statement;
    } else {
        return `I feel great!`;
    }

}


module.exports = Pet;