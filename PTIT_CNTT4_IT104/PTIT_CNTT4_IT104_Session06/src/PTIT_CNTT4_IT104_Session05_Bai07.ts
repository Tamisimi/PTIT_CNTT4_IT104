class Student {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

class Classroom {
    private students: Student[] = [];

    public showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }

    public addStudent(student: Student): void {
        this.students.push(student);
        console.log(`Đã thêm học sinh ${student.getName()} vào lớp.`);
    }

    public filterStudent(id: string): Student | undefined {
        return this.students.find(student => student.getId() === id);
    }

    public addStudentInClass(student: Student, allStudents: Student[]): void {
        this.addStudent(student);
        const index = allStudents.findIndex(s => s.getId() === student.getId());
        if (index !== -1) {
            allStudents.splice(index, 1);
            console.log(`Học sinh ${student.getName()} đã được xóa khỏi danh sách tất cả học sinh.`);
        }
    }

    public removeStudent(id: string, allStudents: Student[]): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
            console.log(`Học sinh ${removedStudent.getName()} đã được xóa khỏi lớp và thêm vào danh sách tất cả học sinh.`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }

    public editStudent(id: string, newName: string): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành ${newName}.`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
}

let allStudents: Student[] = [
    new Student("S1", "Nguyễn Văn A"),
    new Student("S2", "Trần Thị B"),
    new Student("S3", "Lê Văn C"),
    new Student("S4", "Phạm Thị D"),
    new Student("S5", "Hoàng Văn E"),
    new Student("S6", "Ngô Thị F")
];

const classA = new Classroom();
const classB = new Classroom();

console.log("Thêm học sinh vào lớp A:");
classA.addStudentInClass(allStudents[0], allStudents);
classA.addStudentInClass(allStudents[0], allStudents);
classA.addStudentInClass(allStudents[0], allStudents);

console.log("\nThêm học sinh vào lớp B:");
classB.addStudentInClass(allStudents[0], allStudents);
classB.addStudentInClass(allStudents[0], allStudents);
classB.addStudentInClass(allStudents[0], allStudents);

console.log("\nDanh sách lớp A trước khi thay đổi:");
classA.showStudents();

console.log("\nSửa thông tin học sinh S1 trong lớp A:");
classA.editStudent("S1", "Nguyễn Văn An");

console.log("\nXóa học sinh S2 khỏi lớp A:");
classA.removeStudent("S2", allStudents);

console.log("\nDanh sách lớp A sau khi thay đổi:");
classA.showStudents();

console.log("\nDanh sách tất cả học sinh còn lại:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
});