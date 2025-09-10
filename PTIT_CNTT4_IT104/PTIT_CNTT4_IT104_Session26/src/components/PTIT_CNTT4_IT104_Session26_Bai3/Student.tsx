import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Student() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = () => {
        if (searchTerm) {
            setSearchParams({ studentName: searchTerm });
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm"
            />
            <button onClick={handleSearch}>Tìm kiếm</button>
            <p>Current search: {searchParams.get('studentName') || ''}</p>
        </div>
    );
}