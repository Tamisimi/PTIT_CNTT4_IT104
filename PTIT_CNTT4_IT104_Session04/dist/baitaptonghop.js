//Mảng chứa danh sách sinh viên
let student = [];
// Tạo hàm thêm thông tin sinh viên
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    student.push(newStudent);
}
addStudent(1, "lộc", 19, [{ subjectName: "C", score: 8 }, { subjectName: "java", score: 9 }]);
addStudent(1, "linh", 19, [{ subjectName: "C", score: 9 }, { subjectName: "java", score: 8 }]);
// Hàm hiển thị thông tin sinh viên
function printfStudent() {
    for (let i = 0; i < student.length; i++) {
        console.log(`Thông tin sinh viên thứ ${i + 1} : Name_ ${student[i].name}...`);
    }
}
// Hàm cập nhật sinh viên
function updateStudent(id, name, age, subject) {
    //kiểm tra xem id cần cập nhật có tồn tại không?
    const studentIndex = student.findIndex(student => student.id === id);
    if (studentIndex === -1) {
        console.log(`Không có sinh viên nào có id này`);
        return;
    }
    student[studentIndex].name = name;
    student[studentIndex].age = age;
    student[studentIndex].subject = subject;
    console.log(`Cập nhật thông tin thành công`);
}
//Hàm xóa sinh viên
function deleteStudent(id) {
    //kiểm tra id cần xóa có tồn tại không ?
}
