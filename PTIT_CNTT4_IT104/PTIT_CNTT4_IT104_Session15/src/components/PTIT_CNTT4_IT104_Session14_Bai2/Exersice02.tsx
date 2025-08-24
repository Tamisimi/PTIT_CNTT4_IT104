import React, { Component } from 'react';

type State = {
    color: string;
};

export default class Exercise02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: '',
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ color: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Optionally log or use the color value
        console.log('Selected color:', this.state.color);
    };

    render() {
        return (
            <div>
                <h2>Color</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Màu sắc</label>
                    <input type="color" value={this.state.color} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                {this.state.color && <p>Color: {this.state.color}</p>}
            </div>
        );
    }
}