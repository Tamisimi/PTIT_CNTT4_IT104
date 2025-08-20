import React, { Component } from 'react'

type information = {
    name: string,
}

export default class Exercises01 extends Component<{}, information> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "Pham Quoc Loc",
        }
    }
    render() {
        return (
            <div>
                <h1>Ho va ten: {this.state.name}</h1>
            </div>
        )
    }
}