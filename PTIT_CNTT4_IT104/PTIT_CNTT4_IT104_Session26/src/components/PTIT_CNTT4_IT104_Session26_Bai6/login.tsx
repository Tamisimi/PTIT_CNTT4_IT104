import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const userData = {
        email: 'admin@example.com',
        password: 'password123',
        role: 'Admin',
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === userData.email && password === userData.password && role === userData.role) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/account');
        } else {
            setError('Invalid email, password, or role');
        }
    };

    return (
        <div>
            <h1>Đăng nhập</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">-- Chọn quyền --</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}