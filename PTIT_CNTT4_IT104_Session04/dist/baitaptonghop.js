// Mảng chứa danh sách sinh viên
let student = [];

// Hàm thêm thông tin sinh viên
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    student.push(newStudent);
}

addStudent(1, "Lộc", 19, [{ subjectName: "C", score: 8 }, { subjectName: "Java", score: 9 }]);
addStudent(2, "Linh", 19, [{ subjectName: "C", score: 9 }, { subjectName: "Java", score: 8 }]);

// Hàm hiển thị thông tin sinh viên
function printfStudent() {
    for (let i = 0; i < student.length; i++) {
        console.log(`Thông tin sinh viên thứ ${i + 1}:`);
        console.log(`ID: ${student[i].id}`);
        console.log(`Tên: ${student[i].name}`);
        console.log(`Tuổi: ${student[i].age}`);
        console.log(`Môn học: ${JSON.stringify(student[i].subject)}`);
        console.log('---');
    }
}

// Hàm cập nhật sinh viên
function updateStudent(id, name, age, subject = []) {
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
function deleteStudent(id) {
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