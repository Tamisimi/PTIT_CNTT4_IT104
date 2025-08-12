class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(`Width: ${rectangle.width}`);
console.log(`Height: ${rectangle.height}`);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
rectangle.width = 8;
rectangle.height = 12;
console.log(`Updated Width: ${rectangle.width}`);
console.log(`Updated Height: ${rectangle.height}`);
console.log(`Updated Area: ${rectangle.calculateArea()}`);
console.log(`Updated Perimeter: ${rectangle.calculatePerimeter()}`);
