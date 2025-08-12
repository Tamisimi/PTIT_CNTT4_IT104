function introduceStudent(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

let student = {
    name: "Nguyễn Văn An",
    age: 20,
    email: "an.nguyen@example.com"
};

introduceStudent(student);