class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        return this.speed += 10;
    }
    slowDown() {
        return this.speed -= 10;
    }
    showSpeed() {
        return `Toc do hien tai la ${this.speed}`;
    }
    showInfo() {
        return `Name:${this.name},Speed:${this.speed},Id:${this.id}`
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    getGear() {
        return this.gear;
    }
    showInfo() {
        return `Name:${this.name},Speed:${this.speed},Id:${this.id},Gear:${this.getGear()}`
    }
}

const bic = new Bicycle("Drifter", 50, 2, 1);
bic.speedUp();
console.log(bic.showSpeed());
bic.slowDown();
console.log(bic.showSpeed());
console.log(bic.showInfo());




