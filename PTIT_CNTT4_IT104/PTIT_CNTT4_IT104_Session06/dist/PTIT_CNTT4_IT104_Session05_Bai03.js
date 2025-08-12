class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Car extends Vehicle {
    constructor(name) {
        super(name);
    }
    move() {
        console.log(`${this.name} đang di chuyển trên đường bộ với 4 bánh.`);
    }
}
class Boat extends Vehicle {
    constructor(name) {
        super(name);
    }
    move() {
        console.log(`${this.name} đang di chuyển trên mặt nước.`);
    }
}
const car = new Car("Ô tô Toyota");
const boat = new Boat("Tàu thủy");
car.getName();
car.move();
boat.getName();
boat.move();
