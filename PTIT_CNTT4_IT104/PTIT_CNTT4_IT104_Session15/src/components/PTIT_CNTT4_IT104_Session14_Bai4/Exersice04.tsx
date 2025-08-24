import React, { Component } from 'react';

type State = {
    progress: number;
};

export default class ProgressForm extends Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            progress: 0,
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: parseInt(e.target.value, 10) });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Tiến độ hoàn thành: %</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="range" min="0" max="100" value={this.state.progress} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                {this.state.progress > 0 && <p>Tiến độ hoàn thành: {this.state.progress}%</p>}
            </div>
        );
    }
}