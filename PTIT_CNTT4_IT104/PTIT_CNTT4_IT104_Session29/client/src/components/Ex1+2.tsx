import React, { useEffect } from 'react';

interface Product {
    id: number;
    product_name: string;
    image: string;
    price: number;
    quantity: number;
    created_at: string;
}

export default function ProductList() {
    const getAllProduct = () => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                console.log('Danh sách sản phẩm:');
                console.log(data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            });
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <p>Kiểm tra console để xem danh sách sản phẩm.</p>
        </div>
    );
}