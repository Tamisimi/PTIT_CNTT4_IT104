import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>Trang bạn tìm không tồn tại.</p>
            <button onClick={() => navigate('/')}>Quay về trang chủ</button>
            <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
    );
}