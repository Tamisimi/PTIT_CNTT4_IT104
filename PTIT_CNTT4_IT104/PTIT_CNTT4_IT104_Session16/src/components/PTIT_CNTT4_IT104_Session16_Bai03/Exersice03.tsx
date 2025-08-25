import React, { Component } from 'react';
type Color = {
    name: string,
    label: string
}
type State = {
    colors: Color[]
};

export default class Exersice03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            colors: [
                { name: 'primary', label: 'Blue' },
                { name: 'secondary', label: 'Gray' },
                { name: 'success', label: 'Green' },
                { name: 'danger', label: 'Yellow' },
                { name: 'warning', label: 'Red' },
                { name: 'info', label: 'Cyan' },
                { name: 'light', label: 'White' },
                { name: 'dark', label: 'Black' },
            ],
        };
    }
    render() {
        return (
            <>
                <h1>Bài tập 3</h1>
                <div>
                    {this.state.colors.map((color, index) =>
                        <button key={index} style={{ "backgroundColor": color.label }}>{color.name}</button>
                    )}
                </div>
            </>
        )
    }
}