import React, { Component } from 'react';

type State = {
    count: number;
};

export default class Counter extends Component<{}, State> {
    private intervalId: number | null = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                const newCount = prevState.count + 1;
                return { count: newCount >= 10 ? 0 : newCount };
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        return (
            <div>
                <h2>Đếm số: {this.state.count}</h2>
            </div>
        );
    }
}