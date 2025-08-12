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
}

class Classroom {
    private students: Student[] = [];

    public showStudents(): void {
        console.log("Danh sách  trong lớp:");
        if (this.students.length === 0) {
            console.log("Lớp chưa có .");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }

    public addStudent(student: Student): void {
        this.students.push(student);
        console.log(`Đã thêm  ${student.getName()} vào lớp.`);
    }

    public filterStudent(id: string): Student | undefined {
        return this.students.find(student => student.getId() === id);
    }

    public addStudentInClass(student: Student, allStudents: Student[]): void {
        this.addStudent(student);
        const index = allStudents.findIndex(s => s.getId() === student.getId());
        if (index !== -1) {
            allStudents.splice(index, 1);
            console.log(` ${student.getName()} đã được xóa khỏi danh sách tất cả .`);
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

console.log("Thêm vào lớp A:");
classA.addStudentInClass(allStudents[0], allStudents);
classA.addStudentInClass(allStudents[0], allStudents);
classA.addStudentInClass(allStudents[0], allStudents);

console.log("\nThêm vào lớp B:");
classB.addStudentInClass(allStudents[0], allStudents);
classB.addStudentInClass(allStudents[0], allStudents);
classB.addStudentInClass(allStudents[0], allStudents);

console.log("\nDanh sách lớp A:");
classA.showStudents();
console.log("\nDanh sách lớp B:");
classB.showStudents();

console.log("\nDanh sách tất cả  còn lại:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
});

const studentId = "S1";
console.log(`\nLọc ID ${studentId} trong lớp A:`);
const foundStudent = classA.filterStudent(studentId);
if (foundStudent) {
    console.log(`Tìm thấy : ID: ${foundStudent.getId()}, Tên: ${foundStudent.getName()}`);
} else {
    console.log(`Không thấy  ID ${studentId}`);
}