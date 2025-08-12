class _Animal {
    public name: string;
    age: number;
    species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    sound(): void {
        console.log(`am thanh cua ${this.name}`);
    }

    setName(newName: string): void {
        this.name = newName;
    }

}

class _Dog extends _Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak(): void {
        console.log(`Worf worf worf worf`);
    }
}

class _Cat extends _Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak(): void {
        console.log(`Meow meow meow meow`);
    }
}

class _Rabbit extends _Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speak(): void {
        console.log(`Hẹ hẹ hẹ hẹ hẹ`);
    }
}

