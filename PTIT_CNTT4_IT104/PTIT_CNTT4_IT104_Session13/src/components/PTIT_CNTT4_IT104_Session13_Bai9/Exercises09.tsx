import React, { Component } from 'react';

type State = {
    companyName: string;
};

export default class UpdateState extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            companyName: 'Rikkei Academy',
        };
    }

    handleChange = () => {
        this.setState((prevState) => ({
            companyName: prevState.companyName === 'Rikkei Academy' ? 'Rikkei Soft' : 'Rikkei Academy',
        }));
    };

    render() {
        return (
            <div>
                <p>Truớc khi click:</p>
                <p>Tên công ty: {this.state.companyName}</p>
                <button onClick={this.handleChange}>Change</button>
                <p>Sau khi click:</p>
                <p>Tên công ty: {this.state.companyName}</p>
                <button onClick={this.handleChange}>Change</button>
            </div>
        );
    }
}