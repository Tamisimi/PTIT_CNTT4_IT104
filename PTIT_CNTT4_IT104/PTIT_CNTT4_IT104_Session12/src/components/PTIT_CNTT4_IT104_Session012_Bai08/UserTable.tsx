import React from "react";

export default function UserTable() {
    const users = [
        { id: 1, fullName: "Malcolm Lockyer", birthDate: "21/01/1961", gender: "Nam", location: "New York", status: "Sửa" },
        { id: 2, fullName: "Maria", birthDate: "11/02/1990", gender: "Nữ", location: "London", status: "Sửa" },
    ];

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#f5f7fa" }}>
                <thead>
                    <tr style={{ background: "#e9ecef", color: "#333" }}>
                        <th style={{ padding: "10px", textAlign: "left" }}>STT</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Họ và tên</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Ngày sinh</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Giới tính</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Địa chi</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                            <td style={{ padding: "10px", textAlign: "left" }}>{user.id}</td>
                            <td style={{ padding: "10px", textAlign: "left" }}>{user.fullName}</td>
                            <td style={{ padding: "10px", textAlign: "left" }}>{user.birthDate}</td>
                            <td style={{ padding: "10px", textAlign: "left" }}>{user.gender}</td>
                            <td style={{ padding: "10px", textAlign: "left" }}>{user.location}</td>
                            <td style={{ padding: "10px", textAlign: "left" }}>
                                <button style={{ marginRight: "5px", padding: "5px 10px", background: "#fff", border: "1px solid #ccc", cursor: "pointer" }}>Sửa</button>
                                <button style={{ padding: "5px 10px", background: "#dc3545", color: "#fff", border: "none", cursor: "pointer" }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}