import React, { useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export default function Exersice02() {
    const [product] = useState<Product>({
        id: 1,
        name: "Coacoala",
        price: 2500,
        quantity: 5,
    });

    return (
        <div>
            <h1>Bài 2</h1>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
}