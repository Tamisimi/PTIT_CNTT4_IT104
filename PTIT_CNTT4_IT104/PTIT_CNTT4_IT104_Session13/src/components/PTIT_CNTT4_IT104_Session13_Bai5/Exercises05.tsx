import React from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type Props = {
    product: Product;
};

const Children_Comp: React.FC<Props> = ({ product }) => {
    return (
        <div>
            <h2>Dữ liệu trong component con</h2>
            <p>Id: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Price: {product.price} đ</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
};

export default Children_Comp;