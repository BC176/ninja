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
}//end class Ninja

const ninja = new Ninja("Chosen One", 50);
const ninja2 = new Ninja("Great White Farley", 20);

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength, wisdom);
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom() {
        const addToHealth = super.drinkSake();
        // console.log(addToHealth);
        console.log(`If my name wasn't ${this.name}, it would be something else.\n`)
    }
}//end class Sensei

const sensei = new Sensei("Master Splinter");
const sensei2= new Sensei("Shredder");

//Testing outputs
sensei.speakWisdom();
sensei.showStats();
sensei2.sayName();
sensei2.showStats();
sensei2.speakWisdom();
ninja.showStats();
ninja.sayName();
ninja2.sayName();
ninja.showStats();
ninja2.showStats();
ninja.drinkSake();
ninja2.drinkSake();
ninja.showStats();
ninja2.showStats();
sensei.sayName();
