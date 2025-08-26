import React, { useState, type ChangeEvent } from 'react';

export default function Exersice08() {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter(item => item !== value));
        }
    };

    return (
        <div>
            <h1>Bài chọn checkbox</h1>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Đi chơi"
                        checked={selectedValues.includes('Đi chơi')}
                        onChange={handleCheckboxChange}
                    /> Đi chơi
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Code"
                        checked={selectedValues.includes('Code')}
                        onChange={handleCheckboxChange}
                    /> Code
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Bơi lội"
                        checked={selectedValues.includes('Bơi lội')}
                        onChange={handleCheckboxChange}
                    /> Bơi lội
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Nhảy dây"
                        checked={selectedValues.includes('Nhảy dây')}
                        onChange={handleCheckboxChange}
                    /> Nhảy dây
                </label>
            </div>
            {selectedValues.length > 0 && (
                <p>Trong mảng đã render ra ngoài giao diện: {selectedValues.join(', ')}</p>
            )}
        </div>
    );
}