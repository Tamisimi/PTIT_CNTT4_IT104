import React, { Component } from 'react'

type State = {
    subject: string[];
}

export default class Exersice01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            subject: ["Toán", "Văn", "Hóa", "Sinh"],
        }
    }
    render() {
        return (
            <div>
                <h1>Bài tập 1</h1>
                <h2>Danh sách môn học</h2>
                <ul>
                    {this.state.subject.map((subject, index) => (
                        <li key={index}>     {subject} </li>
                    ))}
                </ul>
            </div>
        )
    }
}
