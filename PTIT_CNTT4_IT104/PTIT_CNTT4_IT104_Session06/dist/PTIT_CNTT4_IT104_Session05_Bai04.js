class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(`Hình tròn - Diện tích: ${circle.calculateArea().toFixed(2)}, Chu vi: ${circle.calculatePerimeter().toFixed(2)}`);
console.log(`Hình chữ nhật - Diện tích: ${rectangle.calculateArea().toFixed(2)}, Chu vi: ${rectangle.calculatePerimeter().toFixed(2)}`);
