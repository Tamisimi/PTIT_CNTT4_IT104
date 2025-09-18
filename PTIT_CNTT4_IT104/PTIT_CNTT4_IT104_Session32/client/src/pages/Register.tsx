import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        if (email && password) {
            dispatch({ type: 'REGISTER_USER', payload: { email, password } });
            navigate('/login');
        }
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            <input type="text" placeholder="Nhập email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Nhập mật khẩu..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Đăng ký</button>
        </div>
    );
}