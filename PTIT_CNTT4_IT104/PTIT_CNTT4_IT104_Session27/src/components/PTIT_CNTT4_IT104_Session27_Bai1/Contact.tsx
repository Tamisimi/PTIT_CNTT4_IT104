import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <h1>Thông tin liên hệ</h1>
            <p>Email: nguyen.van.a@example.com</p>
            <p>Số điện thoại: +84 123 456 789</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/nguyen-van-a" target="_blank" rel="noopener noreferrer">linkedin.com/in/nguyen-van-a</a></p>
        </div>
    );
}