import React from "react";

export default function Calculation() {
    const add = () => 10 + 10;
    const subtract = () => 10 - 10;
    const multiply = () => 10 * 10;
    const divide = () => 10 / 10;

    return (
        <div>
            <h1>Danh sách kết quả</h1>
            <ul>
                <li>10 + 10 = {add()}</li>
                <li>10 - 10 = {subtract()}</li>
                <li>10 * 10 = {multiply()}</li>
                <li>10 / 10 = {divide()}</li>
            </ul>
        </div>
    );
}