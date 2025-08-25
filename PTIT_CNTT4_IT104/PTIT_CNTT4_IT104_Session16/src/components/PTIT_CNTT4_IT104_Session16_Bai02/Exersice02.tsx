import React, { Component } from 'react'

type State = {
    isLogin: boolean,
}
export default class Exersice02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { isLogin: false }
    }
    handleToggle = () => {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
        }))
    }
    render() {
        const { isLogin } = this.state;
        return (
            <div>
                <h1>Bài tập 2</h1>
                {isLogin ? <p>Xin chào</p> : <p>Vui lòng đăng nhập</p>}
                <button onClick={this.handleToggle}>{isLogin ? "Đăng xuất" : "Đăng nhập"}</button>
            </div >
        )
    }
}
