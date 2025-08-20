import React, { Component } from 'react';
import Children_Comp from './Exercises05';

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type State = {
    product: Product;
};

export default class Parent_Comp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Bưởi ba roi",
                price: 12000,
                quantity: 6,
            },
        };
    }

    render() {
        return (
            <div>
                <Children_Comp product={this.state.product} />
            </div>
        );
    }
}