import React, { Component } from 'react';

type State = {
    email: string;
};

export default class Exersice01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email: this.state.email });
    };

    render() {
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}