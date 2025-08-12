class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;
    }

    public calculateArea(): number {
        return this._width * this._height;
    }

    public calculatePerimeter(): number {
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