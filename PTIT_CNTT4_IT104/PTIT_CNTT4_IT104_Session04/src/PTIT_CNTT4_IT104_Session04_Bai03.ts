interface Student {
    name: string;
    age: number;
    email: string;
}

function introduceStudent(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

let student: Student = {
    name: "Nguyễn Văn An",
    age: 20,
    email: "an.nguyen@example.com"
};

introduceStudent(student);