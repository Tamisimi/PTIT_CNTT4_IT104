class _Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    sound() {
        console.log(`am thanh cua ${this.name}`);
    }
    setName(newName) {
        this.name = newName;
    }
}
class _Dog extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak() {
        console.log(`Worf worf worf worf`);
    }
}
class _Cat extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak() {
        console.log(`Meow meow meow meow`);
    }
}
class _Rabbit extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak() {
        console.log(`Hẹ hẹ hẹ hẹ hẹ`);
    }
}
