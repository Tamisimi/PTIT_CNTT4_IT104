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

export default function StudentList() {
    const [studentId, setStudentId] = useState<string>('');
    const [newStudent, setNewStudent] = useState({
        student_name: '',
        email: '',
        address: '',
        phone: '',
        status: true,
    });

    const getAllStudent = () => {
        axios
            .get('http://localhost:3000/students')
            .then(response => {
                console.log('Danh sách sinh viên:');
                console.log(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách sinh viên:', error);
            });
    };

    const getStudentById = (id: string) => {
        axios
            .get(`http://localhost:3000/students/${id}`)
            .then(response => {
                console.log('Thông tin sinh viên:');
                console.log(response.data);
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    console.log('Không tìm thấy bản ghi');
                } else {
                    console.error('Lỗi khi lấy thông tin sinh viên:', error);
                }
            });
    };

    const createStudent = () => {
        const student: Student = {
            id: Math.max(...(Math.random() * 1000).toString().split('').map(Number)) + 1, // Tạo ID ngẫu nhiên (thay thế bằng logic phù hợp nếu cần)
            student_name: newStudent.student_name,
            email: newStudent.email,
            address: newStudent.address,
            phone: newStudent.phone,
            status: newStudent.status,
            created_at: new Date().toISOString(),
        };

        axios
            .post('http://localhost:3000/students', student)
            .then(response => {
                console.log('Kết quả thêm sinh viên:');
                console.log(response.data);
                setNewStudent({ student_name: '', email: '', address: '', phone: '', status: true }); // Reset form
            })
            .catch(error => {
                console.error('Lỗi khi thêm sinh viên:', error);
            });
    };

    useEffect(() => {
        getAllStudent();
    }, []);

    const handleSearch = () => {
        if (studentId) {
            getStudentById(studentId);
        } else {
            console.log('Vui lòng nhập ID sinh viên');
        }
    };

    const handleCreate = () => {
        if (newStudent.student_name && newStudent.email && newStudent.address && newStudent.phone) {
            createStudent();
        } else {
            console.log('Vui lòng điền đầy đủ thông tin sinh viên');
        }
    };

    return (
        <div>
            <p>Kiểm tra console để xem danh sách sinh viên.</p>
            <div>
                <h3>Tìm kiếm sinh viên theo ID</h3>
                <input
                    type="text"
                    placeholder="Nhập ID sinh viên"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <button onClick={handleSearch}>Tìm kiếm</button>
            </div>
            <div>
                <h3>Thêm sinh viên mới</h3>
                <input
                    type="text"
                    placeholder="Tên sinh viên"
                    value={newStudent.student_name}
                    onChange={(e) => setNewStudent({ ...newStudent, student_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Địa chỉ"
                    value={newStudent.address}
                    onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={newStudent.status}
                        onChange={(e) => setNewStudent({ ...newStudent, status: e.target.checked })}
                    />
                    Trạng thái (Active)
                </label>
                <button onClick={handleCreate}>Thêm sinh viên</button>
            </div>
        </div>
    );
}