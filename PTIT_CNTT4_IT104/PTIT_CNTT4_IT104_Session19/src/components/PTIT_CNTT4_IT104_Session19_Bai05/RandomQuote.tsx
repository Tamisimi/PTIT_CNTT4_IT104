import React, { useState } from "react";

export default function RandomQuote() {
    const quotes = [
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ];

    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Random Quote</h2>
            <p style={{ fontSize: "18px", padding: "20px" }}>{quote}</p>
            <button
                onClick={getRandomQuote}
                style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
            >
                Lấy câu nói mới
            </button>
        </div>
    );
}