class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Tăng tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`Giảm tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng lại. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
const vehicle = new Vehicle();
vehicle.speedUp();
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();
