interface changeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements changeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0;
    }
    public speedUp(): void {
        this.speed += 10;
        console.log(`Tăng tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    public slowDown(): void {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`Giảm tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    public stop(): void {
        this.speed = 0;
        console.log(`Dừng lại. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

const vehicle = new Vehicle();
vehicle.speedUp();
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();