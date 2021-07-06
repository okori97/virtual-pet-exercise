
var MAXFITNESS = 10;
var STARVATION = 0;
const is_Hungry_And_Unfit_Statement = `I am hungry AND I need a walk`;
const is_Unfit_Statement = `I need a walk`;
const is_Hungry_Statement = `I am hungry`;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
   
    }


Pet.prototype.growUp = function(){
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function(){
    this.fitness += 4;
    if (this.fitness > MAXFITNESS) {
        this.fitness = 10;
    }  
}

Pet.prototype.feed = function(){
    this.hunger -= 3;
    if (this.hunger < STARVATION) {
        this.hunger = 0;
    }
    
}


Pet.prototype.checkUp = function() {

    if (this.hunger >= 5 && this.fitness <= 3 ) {
        return is_Hungry_And_Unfit_Statement;
    } else if (this.hunger >= 5) {
        return is_Hungry_Statement;
    } else if (this.fitness < 3) {
        return is_Unfit_Statement;
    } else {
        return `I feel great!`;
    }

}

Pet.prototype.isAlive = function(){

    if(this.hunger >= 10) {
        return false;
    } else if (this.fitness <= 0) {
        return false;
    } else if (Pet.age >= 30) {
        return false;
    } else {
        return true;
    }
}

module.exports = Pet; 