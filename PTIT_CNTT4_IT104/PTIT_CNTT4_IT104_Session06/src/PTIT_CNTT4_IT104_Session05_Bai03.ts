abstract class Vehicle {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public abstract move(): void;
}

class Car extends Vehicle {
    constructor(name: string) {
        super(name);
    }
    public move(): void {
        console.log(`${this.name} đang di chuyển trên đường bộ với 4 bánh.`);
    }
}

class Boat extends Vehicle {
    constructor(name: string) {
        super(name);
    }
    public move(): void {
        console.log(`${this.name} đang di chuyển trên mặt nước.`);
    }
}

const car = new Car("Ô tô Toyota");
const boat = new Boat("Tàu thủy");

car.getName();
car.move();
boat.getName();
boat.move();