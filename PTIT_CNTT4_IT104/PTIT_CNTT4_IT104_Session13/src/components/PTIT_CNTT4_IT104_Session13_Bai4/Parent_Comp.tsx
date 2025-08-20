import React, { Component } from 'react';
import Children_Comp from './Exercises04';

type State = {
    name: string;
};

export default class Parent_Comp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "Nguyễn Văn Nam",
        };
    }

    render() {
        return (
            <div>
                <h2>Họ và tên bên component cha: {this.state.name}</h2>
                <Children_Comp name={this.state.name} />
            </div>
        );
    }
}