import React from 'react';
import { useSelector } from 'react-redux';

export default function UserList() {
    const users = useSelector((state: any) => state.userData.users);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ Tên</th>
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Địa Chỉ</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item: any, index: number) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.fullName}</td>
                            <td>{item.gender}</td>
                            <td>{item.birthDate}</td>
                            <td>{item.location}</td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}