abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo() {
        return `Name:${this.name}`
    }
}

class Student extends Person {
    public id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return `Name:${this.name},Id:${this.id}`
    }
}

class Teacher extends Person {
    public subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        return `Name:${this.name},Suject:${this.subject}`
    }
}

const student = new Student("Nguyễn Văn Minh", 12345);
console.log(student.displayInfo());
const teacher = new Teacher("Trần Thị Thắng", "Toán học");
console.log(teacher.displayInfo()); 
