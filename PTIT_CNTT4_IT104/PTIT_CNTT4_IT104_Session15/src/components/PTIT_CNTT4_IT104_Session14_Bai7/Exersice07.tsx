import React, { Component } from 'react';

type State = {
    time: string;
};

export default class Exersice07 extends Component<{}, State> {
    private intervalId: number | null = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
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
                <h2>Thời gian hiện tại: {this.state.time}</h2>
            </div>
        );
    }
}