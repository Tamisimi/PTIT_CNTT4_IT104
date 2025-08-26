import React, { useState } from 'react';


export default function Exersice03() {
    const [color, setColor] = useState("black");

    const changeColor = () => {
        setColor(color === "black" ? "red" : "black");
    };

    return (
        <div>
            <h2 className={color === "red" ? "red-text" : "black-text"}>Tiêu đề văn bản</h2>
            <button onClick={changeColor}>Thay đổi màu</button>
        </div>
    );
}