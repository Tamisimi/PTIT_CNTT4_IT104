class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Kích thước của ${this.name}: chiều rộng = ${this.width}, chiều cao = ${this.height}`);
    }
}
const rectangle = new Rectangle("Hình chữ nhật", 5.0, 3.0);
console.log("Tên hình: " + rectangle.getName());
rectangle.getSize();
