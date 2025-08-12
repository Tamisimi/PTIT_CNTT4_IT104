// Tạo interface Animal

interface IAnimal {
    //Thuộc tính
    name: string,
    age: number,
    category: string | number | boolean,
    // Phương thức
    sound(): string,
    getDetail(): string,
    move(): string,
    feed(): string
}

// Tạo abstract class Animal

abstract class Animal implements IAnimal {
    name: string;
    age: number;
    category: string | number | boolean;
    constructor(name: string, age: number, category: string | number | boolean) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound(): string {
        return;
    }
    getDetail(): string {
        return;
    }
    move(): string {
        return;
    }
    feed(): string {
        return;
    }

}

//Tạo các class con kế thừa class animal
class Mammal extends Animal {
    private furColor: string;
    constructor(name: string, age: number, furColor: string) {
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move(): string {
        return `Phương thức di chuyển của chạy`;
    }
    getFurColor(): string {
        return `Màu lông của loài: ${this.name} là: ${this.furColor}`;
    }
}

class Bird extends Animal {
    private wingSpan: number;
    constructor(name: string, age: number, wingSpan: number) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move(): string {
        return `Phương thức di chuyển của bay`;
    }
    getWingSpan(): string {
        return `Sải cánh của loài: ${this.name} là: ${this.wingSpan}`;
    }
}

class Reptile extends Animal {
    private venomouse: boolean;
    constructor(name: string, age: number, venomouse: boolean) {
        super(name, age, venomouse);
        this.name = name;
        this.age = age;
        this.venomouse = venomouse;
    }
    move(): string {
        return `Phương thức di chuyển của bò`;
    }
    getVemonouse(): string {
        return `Nọc độc của loài: ${this.name} là: ${this.venomouse}`;
    }
}
//Tính đa hình là cùng 1 phương thức nhưng triển khai khác nhau
const animal: Animal[] = [
    new Mammal("Blue", 2, "màu xanh"),
    new Bird("Bird", 2, 5),
    new Reptile("Rắn", 2, true),

];
// Gọi phương thức

animal.forEach(item => {
    // Thông tin di chuyển của các loài
    console.log(item.move());
})

//in thông tin màu lông của loài
const new_animal = new Mammal("con lợn", 1, "màu trắng");
console.log(new_animal.getFurColor());

