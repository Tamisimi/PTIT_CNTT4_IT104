// Tạo interface Animal
// Tạo abstract class Animal
class Animal {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return;
    }
    getDetail() {
        return;
    }
    move() {
        return;
    }
    feed() {
        return;
    }
}
//Tạo các class con kế thừa class animal
class Mammal extends Animal {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move() {
        return `Phương thức di chuyển của chạy`;
    }
    getFurColor() {
        return `Màu lông của loài: ${this.name} là: ${this.furColor}`;
    }
}
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return `Phương thức di chuyển của bay`;
    }
    getWingSpan() {
        return `Sải cánh của loài: ${this.name} là: ${this.wingSpan}`;
    }
}
class Reptile extends Animal {
    constructor(name, age, venomouse) {
        super(name, age, venomouse);
        this.name = name;
        this.age = age;
        this.venomouse = venomouse;
    }
    move() {
        return `Phương thức di chuyển của bò`;
    }
    getVemonouse() {
        return `Nọc độc của loài: ${this.name} là: ${this.venomouse}`;
    }
}
//Tính đa hình là cùng 1 phương thức nhưng triển khai khác nhau
const animal = [
    new Mammal("Blue", 2, "màu xanh"),
    new Bird("Bird", 2, 5),
    new Reptile("Rắn", 2, true),
];
// Gọi phương thức
animal.forEach(item => {
    // Thông tin di chuyển của các loài
    console.log(item.move());
});
//in thông tin màu lông của loài
const new_animal = new Mammal("con lợn", 1, "màu trắng");
console.log(new_animal.getFurColor());
