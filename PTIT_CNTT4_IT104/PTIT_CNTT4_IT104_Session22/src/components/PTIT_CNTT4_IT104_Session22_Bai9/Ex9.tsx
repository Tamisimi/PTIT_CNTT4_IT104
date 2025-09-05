import React from "react";

interface User {
    id: number;
    name: string;
    gender: string;
    dob: string;
    email: string;
    address: string;
}

const data: User[] = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        gender: "Nam",
        dob: "01/01/1990",
        email: "nguyenvana@example.com",
        address: "Hà Nội"
    },
    {
        id: 2,
        name: "Trần Thị B",
        gender: "Nữ",
        dob: "02/02/1995",
        email: "tranthib@example.com",
        address: "TP. Hồ Chí Minh"
    },
    {
        id: 3,
        name: "Phạm Văn C",
        gender: "Nam",
        dob: "03/02/1992",
        email: "phamvanc@example.com",
        address: "Đà Nẵng"
    },
    {
        id: 4,
        name: "Lê Thị D",
        gender: "Nữ",
        dob: "04/04/1993",
        email: "lethid@example.com",
        address: "Hải Phòng"
    },
    {
        id: 5,
        name: "Nguyễn Văn E",
        gender: "Nam",
        dob: "05/05/1991",
        email: "nguyenvane@example.com",
        address: "Cần Thơ"
    },
];

export default function List() {
    return (
        <div className="p-4">
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 border">STT</th>
                        <th className="px-4 py-2 border">Họ và tên</th>
                        <th className="px-4 py-2 border">Giới tính</th>
                        <th className="px-4 py-2 border">Ngày sinh</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Địa chỉ</th>
                        <th className="px-4 py-2 border">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border text-center">{user.id}</td>
                            <td className="px-4 py-2 border">{user.name}</td>
                            <td className="px-4 py-2 border text-center">{user.gender}</td>
                            <td className="px-4 py-2 border text-center">{user.dob}</td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.address}</td>
                            <td className="px-4 py-2 border text-center">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-1">
                                    Sửa
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}