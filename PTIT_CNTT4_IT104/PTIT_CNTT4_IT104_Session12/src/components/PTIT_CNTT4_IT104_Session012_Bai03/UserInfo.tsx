import React from "react";

export default function UserInfo() {
    const user = {
        fullName: "Nguyễn Văn A",
        gender: "Nam",
        birthDate: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thành Xuân, Hà Nội"
    };

    return (
        <div>
            <h1>Thông tin cá nhân</h1>
            <ul>
                <li>Họ và tên: {user.fullName}</li>
                <li>Giới tính: {user.gender}</li>
                <li>Ngày sinh: {user.birthDate}</li>
                <li>Email: {user.email}</li>
                <li>Địa chi: {user.address}</li>
            </ul>
        </div>
    );
}