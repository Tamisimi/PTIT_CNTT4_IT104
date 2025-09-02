import React, { useState } from "react";

export default function Stringlength() {
    const [text, setText] = useState("");
    const [mess, setMess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value);

        if (value.length > 5) {
            setMess("Chuoi nhap dai hon 5 ky tu");
        } else {
            setMess("");
        }
    };

    return (
        <div>
            <h2>Kiểm tra độ dài chuỗi nhập</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Nhập ít nhất 6 ký tự..."
            />
            <p>{mess}</p>
        </div>
    );
}