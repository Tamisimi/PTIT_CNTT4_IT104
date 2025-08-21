import React, { Component } from 'react';

type State = {
    email: string;
    password: string;
    error: string;
};

export default class LoginForm extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: 'Email và Mật khẩu không được để trống' });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);
        if (user) {
            this.setState({ error: '' });
            alert('Đăng nhập thành công');
        } else {
            this.setState({ error: 'Đăng nhập thất bại' });
        }
    };

    render() {
        return (
            <div>
                <h2>Đăng nhập tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
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
                    {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                    <button type="submit">Đăng nhập</button>
                </form>
                <p>Form đăng nhập tài khoản</p>
            </div>
        );
    }
}