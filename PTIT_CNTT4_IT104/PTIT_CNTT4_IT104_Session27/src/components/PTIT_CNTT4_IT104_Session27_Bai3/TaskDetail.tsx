import React from 'react';
import { Link } from 'react-router-dom';

const tasks = [
    { id: '1', title: 'Học React Router', description: 'Học cách sử dụng Dynamic Routes.' },
    { id: '2', title: 'Làm quen với useNavigate', description: 'Thực hành quay lại trang trước.' },
    { id: '3', title: 'Thực hành với Outlet', description: 'Học cách sử dụng Outlet trong React Router.' },
];

export default function TaskList() {
    return (
        <div>
            <h1>Danh sách công việc</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}