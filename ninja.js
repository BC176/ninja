class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(`sayName function return: ${this.name}\n`);
    }
    showStats() {
        console.log(`showStats function return- Ninja name: ${this.name}, health: ${this.health}, 
        speed: ${this.speed}, and strength: ${this.strength}\n`);
    }
    drinkSake() {
        console.log(`drinkSake function invoked, 10 health has been added to ${this.name}.\n`)
        this.health += 10;
    }
}

const ninja = new Ninja("Chosen One", 50);
const ninja2 = new Ninja("Great White Farley", 20);

ninja.sayName();
ninja2.sayName();
ninja.showStats();
ninja2.showStats();
ninja.drinkSake();
ninja2.drinkSake();
ninja.showStats();
ninja2.showStats();
