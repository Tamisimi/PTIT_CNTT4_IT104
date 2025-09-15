import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Định nghĩa interface cho Student
interface Student {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

// Hàm render từng dòng sinh viên
const StudentItem = ({ student, onDelete }: { student: Student; onDelete: (id: number) => void }) => {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{student.student_name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{student.phone}</td>
            <td>
                <button>✏️</button>
                <button onClick={() => onDelete(student.id)}>🗑️</button>
            </td>
        </tr>
    );
};

export default function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        axios
            .get('http://localhost:3000/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách sinh viên:', error);
            });
    };

    const handleDelete = (id: number) => {
        setSelectedId(id);
    };

    const handleCancel = () => {
        setSelectedId(null);
    };

    const handleConfirmDelete = () => {
        if (selectedId !== null) {
            axios
                .delete(`http://localhost:3000/students/${selectedId}`)
                .then(() => {
                    fetchStudents();
                    setSelectedId(null);
                })
                .catch(error => {
                    console.error('Lỗi khi xóa sinh viên:', error);
                });
        }
    };

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
                        <StudentItem key={student.id} student={student} onDelete={handleDelete} />
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

            {selectedId !== null && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '20px', border: '1px solid #ccc' }}>
                    <h3>Xóa nhân viên</h3>
                    <p>Bạn chắc chắn muốn xóa sinh viên-ST0{selectedId}?</p>
                    <button onClick={handleCancel}>Hủy</button>
                    <button onClick={handleConfirmDelete} style={{ background: 'red', color: 'white', marginLeft: '10px' }}>Xóa</button>
                </div>
            )}
        </div>
    );
}