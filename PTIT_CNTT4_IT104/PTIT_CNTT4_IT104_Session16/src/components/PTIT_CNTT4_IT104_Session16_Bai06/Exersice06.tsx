import React, { Component } from 'react'

type State = {
    darkNess: boolean
}

export default class Exercise06 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            darkNess: false
        }
    }

    handleChange = () => {
        this.setState(prevState => ({
            darkNess: !prevState.darkNess
        }))
    }

    render() {
        const { darkNess } = this.state
        return (
            <div className={darkNess ? 'light-theme' : 'dark-theme'}>
                <button onClick={this.handleChange}>Chuyển theme</button>
                <p>Chế độ {darkNess ? "Sáng" : "Tối"} đang bật</p>
            </div>
        )
    }
}