abstract class Shape {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public abstract getSize(): void;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    public getSize(): void {
        console.log(`Kích thước của ${this.name}: chiều rộng = ${this.width}, chiều cao = ${this.height}`);
    }
}

const rectangle = new Rectangle("Hình chữ nhật", 5.0, 3.0);
console.log("Tên hình: " + rectangle.getName());
rectangle.getSize();