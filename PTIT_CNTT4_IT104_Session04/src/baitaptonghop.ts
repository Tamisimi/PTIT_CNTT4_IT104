type Subject = {
    subjectName: string,
    score: number | string
}

type Student = {
    id: number,
    name: string,
    age: number,
    subject: Subject[]
}

let student: Student[] = [];

function addStudent(id: number, name: string, age: number, subject: Subject[]) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    }
    student.push(newStudent);
}

addStudent(1, "Lộc", 19, [{ subjectName: "C", score: 8 }, { subjectName: "Java", score: 9 }]);
addStudent(2, "Linh", 19, [{ subjectName: "C", score: 9 }, { subjectName: "Java", score: 8 }]);

function printfStudent(): void {
    for (let i = 0; i < student.length; i++) {
        console.log(`Thông tin sinh viên thứ ${i + 1}:`);
        console.log(`ID: ${student[i].id}`);
        console.log(`Tên: ${student[i].name}`);
        console.log(`Tuổi: ${student[i].age}`);
        console.log(`Môn học: ${JSON.stringify(student[i].subject)}`);
        console.log('---');
    }
}

// Sửa hàm updateStudent
function updateStudent(id: number, name: string, age: number, subject: Subject[] = []): void {
    const studentIndex = student.findIndex(student => student.id === id);
    if (studentIndex === -1) {
        console.log(`Không có sinh viên nào có id ${id}`);
        return;
    }
    // Cập nhật thông tin
    student[studentIndex].name = name;
    student[studentIndex].age = age;
    // Chỉ cập nhật subject nếu được cung cấp
    if (subject.length > 0) {
        student[studentIndex].subject = subject;
    }
    console.log(`Cập nhật thông tin sinh viên id ${id} thành công`);
}

// Hàm xóa sinh viên
function deleteStudent(id: number): void {
    const studentIndex = student.findIndex(student => student.id === id);
    if (studentIndex === -1) {
        console.log(`Không có sinh viên nào có id ${id}`);
        return;
    }
    // Xóa sinh viên khỏi mảng
    student.splice(studentIndex, 1);
    console.log(`Xóa sinh viên id ${id} thành công`);
}

console.log("Danh sách sinh viên ban đầu:");
printfStudent();

updateStudent(1, "Lộc Nguyễn", 20, [{ subjectName: "C++", score: 9 }, { subjectName: "Java", score: 8 }]);
console.log("\nDanh sách sau khi cập nhật:");
printfStudent();

deleteStudent(2);
console.log("\nDanh sách sau khi xóa:");
printfStudent();