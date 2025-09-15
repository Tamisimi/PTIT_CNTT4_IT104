import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Student {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

const StudentItem = ({ student }: { student: Student }) => {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{student.student_name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{student.phone}</td>
            <td>
                <button>✏️</button>
                <button>🗑️</button>
            </td>
        </tr>
    );
};

export default function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách sinh viên:', error);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên sinh viên</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Lựa chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <StudentItem key={student.id} student={student} />
                    ))}
                </tbody>
            </table>
            <p>Hiển thị 5/10 bản ghi</p>
            <div>
                <span>Trở về</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>Sau</span>
            </div>
        </div>
    );
}