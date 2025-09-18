/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registeredUser = useSelector((state: any) => state.user.registeredUser);
    const loggedInUser = useSelector((state: any) => state.user.loggedInUser);
    const dispatch = useDispatch();

    useEffect(() => {
        if (registeredUser) {
            setEmail(registeredUser.email);
            setPassword(registeredUser.password);
        }
    }, [registeredUser]);

    const handleLogin = () => {
        if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
            dispatch({ type: 'LOGIN_USER', payload: { email } });
        }
    };

    const handleClear = () => {
        dispatch({ type: 'LOGOUT_USER' });
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <input type="text" placeholder="Nhập email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Nhập mật khẩu..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Đăng nhập</button>
            {loggedInUser && <button onClick={handleClear}>Đăng xuất</button>}
        </div>
    );
}