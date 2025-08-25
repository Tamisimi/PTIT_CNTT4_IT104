import React, { Component } from 'react';

type State = {
    count: number;
};

export default class Exercise04 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1, }));
    };

    render() {
        return (
            <div>
                <h1>Bài tập 4</h1>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.handleClick}>Increase</button>
            </div>
        );
    }
}