import React, { useState, type ChangeEvent } from 'react';

export default function Exersice05() {
    const [text, setText] = useState('');
    const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>Bài tập 5</h1>
            <input
                type="text"
                placeholder="Nhập thông tin"
                value={text}
                onChange={handleUpdate}
            />
            {text && <p>{text}</p>}
        </div>
    );
}