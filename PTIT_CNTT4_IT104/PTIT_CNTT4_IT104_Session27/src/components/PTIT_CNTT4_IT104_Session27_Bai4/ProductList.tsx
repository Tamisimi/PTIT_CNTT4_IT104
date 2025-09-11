import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const products = [
    { id: '1', name: 'iPhone 14 Pro', price: 29000000, description: 'Bản thân cao cấp với chip A17 Pro và camera tiên tiến.' },
    { id: '2', name: 'Samsung Galaxy S23 Ultra', price: 29000000, description: 'Smartphone flagship với Samsung và camera 200MP.' },
    { id: '3', name: 'MacBook Air M2', price: 29900000, description: 'Laptop mỏng nhẹ với chip Apple M2 hỗ trợ mạnh mẽ.' },
    { id: '4', name: 'Dell XPS 13', price: 29900000, description: 'Laptop siêu mỏng với màn hình InfinityEdge sắc nét.' },
    { id: '5', name: 'iPad Pro 12.9"', price: 31900000, description: 'Máy tính bảng cao cấp với màn hình Liquid Retina XDR.' },
];

export default function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('search') || '';
        setSearchTerm(search);
    }, [searchParams]);

    const handleSearch = () => {
        if (searchTerm) {
            setSearchParams({ search: searchTerm });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter search keyword"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price.toLocaleString()} VND</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}