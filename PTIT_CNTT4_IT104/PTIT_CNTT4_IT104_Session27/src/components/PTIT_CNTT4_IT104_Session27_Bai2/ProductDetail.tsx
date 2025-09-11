import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
    { id: '1', name: 'Laptop Dell XPS 13', price: 35000000, description: 'Laptop cao cấp với hiệu năng mạnh mẽ, màn hình sắc nét và thiết kế mỏng nhẹ, phù hợp cho công việc và giải trí.' },
    { id: '2', name: 'iPhone 14 Pro', price: 30000000, description: 'Điện thoại cao cấp với camera đỉnh cao, hiệu suất vượt trội và thiết kế sang trọng, lý tưởng cho người dùng yêu công nghệ.' },
    { id: '3', name: 'Samsung Galaxy S22', price: 28000000, description: 'Smartphone mạnh mẽ với thiết kế sang trọng, camera chất lượng và hiệu năng ổn định cho mọi nhu cầu.' },
    { id: '4', name: 'Tai nghe Sony WH-1000XM4', price: 7000000, description: 'Tai nghe chống ồn chất lượng cao, âm thanh sống động và thời lượng pin dài, phù hợp cho nghe nhạc và làm việc.' },
    { id: '5', name: 'Apple Watch Series 8', price: 12000000, description: 'Đồng hồ thông minh với nhiều tính năng như theo dõi sức khỏe, thông báo và thiết kế thời trang.' },
];

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div>
                <div className="bg-blue-600 text-white text-center py-4">
                    <h1 className="text-2xl font-bold">Trang Chi Tiết Sản Phẩm</h1>
                    <p className="mt-2">Thông tin chi tiết sản phẩm</p>
                </div>
                <div className="p-4 text-center">
                    <p>Sản phẩm không tồn tại.</p>
                    <button onClick={() => navigate('/products')} className="mt-2 bg-blue-500 text-white px-2 py-1">
                        Quay lại danh sách sản phẩm
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-blue-600 text-white text-center py-4">
                <h1 className="text-2xl font-bold">Trang Chi Tiết Sản Phẩm</h1>
                <p className="mt-2">Thông tin chi tiết sản phẩm</p>
            </div>
            <div className="p-4">
                <h2>{product.name}</h2>
                <p>Giá: {product.price.toLocaleString()} VND</p>
                <p>{product.description}</p>
                <button onClick={() => navigate('/products')} className="mt-2 bg-blue-500 text-white px-2 py-1">
                    Quay lại danh sách sản phẩm
                </button>
            </div>
        </div>
    );
}