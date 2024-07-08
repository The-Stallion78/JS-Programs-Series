// Base class (Parent class)
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        return `${this.name} makes a ${this.sound} sound.`;
    }
}

// Derived class (Child class) inheriting from Animal

class Cat extends Animal {
    constructor(name, sound, breed) {
        super(name, sound); // Call the parent class constructor
        this.breed = breed;
    }

    // Method specific to Dog class
    fetch() {
        return `${this.name} Sleeps everytime.`;
    }
}

// Creating an instance of Dog class
const myCat = new Cat("Mekow", "Meow", "Local Street Cats");

console.log(myCat.makeSound()); // Buddy makes a bark sound.
console.log(myCat.fetch());     // Buddy is fetching the ball.
console.log(`Breed: ${myCat.breed}`); // Breed: Golden Retriever
