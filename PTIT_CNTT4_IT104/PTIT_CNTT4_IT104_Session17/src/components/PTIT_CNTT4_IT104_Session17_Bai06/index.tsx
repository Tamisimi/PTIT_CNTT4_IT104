import React, { useState, type ChangeEvent } from 'react';

export default function Exersice06() {
    const [text, setText] = useState('');

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).length - 1;
    return (
        <div>
            <h1>Bài tập đếm ký tự</h1>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={text}
                onChange={handleTextChange}
            />
            {text && (
                <div>
                    <p>Số ký tự: {charCount}</p>
                    <p>Số khoảng cách: {wordCount >= 0 ? wordCount : 0}</p>
                </div>
            )}
        </div>
    );
}