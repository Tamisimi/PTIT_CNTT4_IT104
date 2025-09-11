import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: '1', name: 'Laptop Dell XPS 13', price: 35000000, description: 'Laptop cao cấp với hiệu năng mạnh mẽ.' },
    { id: '2', name: 'iPhone 14 Pro', price: 30000000, description: 'Điện thoại cao cấp với camera đỉnh cao.' },
    { id: '3', name: 'Samsung Galaxy S22', price: 28000000, description: 'Smartphone mạnh mẽ với thiết kế sang trọng.' },
    { id: '4', name: 'Tai nghe Sony WH-1000XM4', price: 7000000, description: 'Tai nghe chống ồn chất lượng cao.' },
    { id: '5', name: 'Apple Watch Series 8', price: 12000000, description: 'Đồng hồ thông minh với nhiều tính năng.' },
];

export default function ProductList() {
    return (
        <div>
            <div className="bg-blue-600 text-white text-center py-4">
                <h1 className="text-2xl font-bold">Trang Chi Tiết Sản Phẩm</h1>
                <p className="mt-2">Danh sách sản phẩm</p>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Danh sách sản phẩm</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p>Giá: {product.price.toLocaleString()} VND</p>
                            <p>{product.description}</p>
                            <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 block">
                                Xem chi tiết
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}