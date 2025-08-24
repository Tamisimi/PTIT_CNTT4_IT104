import React, { Component } from 'react'
type State = {
    date: string;
}
export default class Exersice03 extends Component<{}, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            date: '',
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value });
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <h2>Ngày sinh:</h2>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="date" value={this.state.date} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
                {this.state.date && <p>Ngày sinh: {this.state.date}</p>}
            </div>
        )
    }
}
