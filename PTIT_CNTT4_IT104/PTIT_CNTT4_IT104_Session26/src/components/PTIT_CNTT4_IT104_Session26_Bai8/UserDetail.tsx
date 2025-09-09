import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail() {
    const { id } = useParams()
    const users = [
        { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
        { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
        { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
    ]
    const user = users.find(u => u.id === parseInt(id || '0'))

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            {user ? (
                <div className="bg-white p-4 rounded shadow w-full max-w-md">
                    <h1 className="text-xl font-bold mb-2">Thông tin chi tiết</h1>
                    <p>Id: {user.id}</p>
                    <p>UserName: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address}</p>
                    <Link
                        to="/"
                        className="mt-2 inline-block bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-2 rounded"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            ) : (
                <h1 className="text-2xl font-bold text-red-800">User not found</h1>
            )}
        </div>
    )
}