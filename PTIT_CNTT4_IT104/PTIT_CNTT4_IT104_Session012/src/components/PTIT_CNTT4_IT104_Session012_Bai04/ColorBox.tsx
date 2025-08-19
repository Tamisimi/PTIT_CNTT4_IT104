import React from "react";
import "./ColorBox.css";

export default function ColorBox() {
    const colors = ["red", "blue", "green"];

    return (
        <div>
            {colors.map((color, index) => (
                <div key={index} className="box" style={{ backgroundColor: color }}>
                    <span>Box</span>
                    <div className="label">{color}</div>
                </div>
            ))}
        </div>
    );
}