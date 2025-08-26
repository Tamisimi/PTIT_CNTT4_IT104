import React, { useState, type ChangeEvent } from 'react';

export default function Exersice07() {
    const [city, setCity] = useState('');

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <h1>Bài chọn thành phố</h1>
            <select
                value={city}
                onChange={handleSelectChange}
            >
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
            {city && <p>Thành phố đã chọn: {city}</p>}
        </div>
    );
}