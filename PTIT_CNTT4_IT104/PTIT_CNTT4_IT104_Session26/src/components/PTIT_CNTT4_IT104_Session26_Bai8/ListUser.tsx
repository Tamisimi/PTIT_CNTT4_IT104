import React from 'react'
import { Link } from 'react-router-dom'

export default function ListUser() {
    const users = [
        { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
        { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
        { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
    ]

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Danh Sách Người Dùng</h1>
            {users.map(user => (
                <div key={user.id} className="bg-white p-4 mb-2 rounded shadow w-full max-w-md">
                    <p>Id: {user.id}</p>
                    <p>UserName: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address}</p>
                    <Link
                        to={`/user/${user.id}`}
                        className="mt-2 inline-block bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-2 rounded"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            ))}
        </div>
    )
}