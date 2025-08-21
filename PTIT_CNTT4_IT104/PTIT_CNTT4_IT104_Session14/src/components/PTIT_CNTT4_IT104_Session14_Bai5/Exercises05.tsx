import React, { Component } from 'react';

type State = {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
};

export default class AddProductForm extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            productCode: '',
            productName: '',
            price: 0,
            quantity: 0,
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            [name]: name === 'price' || name === 'quantity' ? parseFloat(value) || 0 : value,
        } as Pick<State, keyof State>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Thêm mới sản phẩm</h2>
                <label>Mã sản phẩm</label>
                <input
                    type="text"
                    name="productCode"
                    value={this.state.productCode}
                    onChange={this.handleChange}
                />
                <br />
                <label>Tên sản phẩm</label>
                <input
                    type="text"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.handleChange}
                />
                <br />
                <label>Giá</label>
                <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                />
                <br />
                <label>Số lượng</label>
                <input
                    type="number"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                />
                <br />
                <button type="submit">Đăng ký</button>
            </form>
        );
    }
}