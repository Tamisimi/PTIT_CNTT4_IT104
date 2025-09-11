import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    { id: '1', title: 'Học React Router', excerpt: 'Hiểu cách sử dụng Dynamic Routes trong React.' },
    { id: '2', title: 'Làm quen với useNavigate', excerpt: 'Thực hành quay lại trang trước với useNavigate.' },
    { id: '3', title: 'Thực hành Nested Routes', excerpt: 'Khám phá cách xây dựng layout chung với Nested Routes.' },
    { id: '4', title: 'Tối ưu hóa hiệu suất React', excerpt: 'Mẹo cải thiện hiệu suất ứng dụng React.' },
    { id: '5', title: 'Giới thiệu về Hooks', excerpt: 'Hiểu cách sử dụng Hooks trong React.' },
];

export default function Posts() {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
                        <p>{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}