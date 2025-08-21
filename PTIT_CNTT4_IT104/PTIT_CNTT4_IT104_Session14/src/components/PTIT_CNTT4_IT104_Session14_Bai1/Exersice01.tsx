import React, { Component } from 'react';

type State = {
    userName: string;
};

export default class Exercise01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userName: 'Nguyen Minh Son',
        };
        console.log('Constructor: Component is being initialized');
    }

    componentDidMount() {
        console.log('componentDidMount: Component has mounted');
    }

    componentDidUpdate(prevProps: {}, prevState: State) {
        if (prevState.userName !== this.state.userName) {
            console.log('componentDidUpdate: State userName has changed');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to unmount');
    }

    render() {
        console.log('render: Component is rendering');
        return (
            <div>
                <h2>User Name: {this.state.userName}</h2>
            </div>
        );
    }
}