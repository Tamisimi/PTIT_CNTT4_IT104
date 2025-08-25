import React, { Component } from 'react';

type User = {
    name: string;
    email: string;
    age: string;
};

type State = {
    user: User;
    isValid: boolean;
    message: string;
};

export default class Exercise05 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: { name: '', email: '', age: '' },
            isValid: false,
            message: '',
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prev => ({ user: { ...prev.user, [name]: value } }));
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, age } = this.state.user;
        if (!email.includes('@')) {
            this.setState({ message: 'Email không hợp lệ' });
        } else if (parseInt(age) < 0) {
            this.setState({ message: 'Tuổi không được âm' });
        } else {
            this.setState({ isValid: true, message: '' });
        }
    };

    handleReset = () => {
        this.setState({ user: { name: '', email: '', age: '' }, isValid: false, message: '' });
    };

    render() {
        const { user, isValid, message } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Thông tin người dùng</h3>
                    <input name="name" placeholder="Họ tên" value={user.name} onChange={this.handleChange} /><br />
                    <input name="email" placeholder="Email" value={user.email} onChange={this.handleChange} /><br />
                    <input name="age" placeholder="Tuổi" value={user.age} onChange={this.handleChange} /><br /><br />
                    <button type="submit">Gửi</button>
                    <button type="button" onClick={this.handleReset}>Xóa</button>
                    <p>{message}</p>
                    {isValid && (
                        <div>
                            Thông tin:<br />
                            Họ tên: {user.name}<br />
                            Email: {user.email}<br />
                            Tuổi: {user.age}
                        </div>
                    )}
                </form>
            </div>
        );
    }
}