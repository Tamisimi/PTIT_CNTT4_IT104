import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <h1>Thông tin cá nhân</h1>
            <p>Họ tên: Nguyễn Văn A</p>
            <p>Nghề nghiệp: Lập trình viên</p>
            <p>Sở thích: Đọc sách, chơi game, khám phá công nghệ</p>
        </div>
    );
}