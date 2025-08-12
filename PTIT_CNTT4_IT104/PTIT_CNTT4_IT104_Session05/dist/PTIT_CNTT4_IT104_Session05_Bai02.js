class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
const students = [];
students.push(new Student(1, 20, "student1@example.com"));
students.push(new Student(2, 22, "student2@example.com"));
students.push(new Student(3, 19, "student3@example.com"));
students.forEach(student => {
    student.displayInfo();
});
