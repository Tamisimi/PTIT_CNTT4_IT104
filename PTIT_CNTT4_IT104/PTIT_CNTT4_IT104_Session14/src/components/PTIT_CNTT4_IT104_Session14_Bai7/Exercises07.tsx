import React, { Component } from 'react';

type State = {
    studentName: string;
    email: string;
    password: string;
    address: string;
    error: string;
};

export default class RegistrationForm extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            studentName: '',
            email: '',
            password: '',
            address: '',
            error: '',
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { studentName, email, password, address } = this.state;

        if (!studentName || !email || !password) {
            this.setState({ error: 'Tên sinh viên, Email và Mật khẩu không được để trống' });
            return;
        }

        const existingEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
        if (existingEmails.includes(email)) {
            this.setState({ error: 'Email đã tồn tại' });
            return;
        }

        const userData = { studentName, email, password, address, created_at: new Date().toLocaleString() };
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        existingEmails.push(email);
        localStorage.setItem('registeredEmails', JSON.stringify(existingEmails));

        this.setState({
            studentName: '',
            email: '',
            password: '',
            address: '',
            error: '',
        });

        alert('Đăng ký tài khoản thành công');

        const nameInput = document.querySelector('input[name="studentName"]') as HTMLInputElement;
        if (nameInput) nameInput.focus();
    };

    render() {
        return (
            <div>
                <h2>Đăng ký tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tên sinh viên</label>
                        <input
                            type="text"
                            name="studentName"
                            value={this.state.studentName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                    <button type="submit">Đăng ký</button>
                </form>
                <p>Form đăng ký tài khoản</p>
            </div>
        );
    }
}