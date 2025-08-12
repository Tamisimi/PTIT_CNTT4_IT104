class Animal {
    constructor(name) {
        this.name = name;
    }
    printfName() {
        return `Name:${this.name}`;
    }
}
class Cat extends Animal {
    makeNoise() {
        return `meo meo`;
    }
}
class Dog extends Animal {
    makeNoise() {
        return `bark bark`;
    }
}
const cat = new Cat("Mari");
console.log(cat.printfName());
console.log(cat.makeNoise());
const dog = new Dog("Ako");
console.log(dog.printfName());
console.log(dog.makeNoise());
