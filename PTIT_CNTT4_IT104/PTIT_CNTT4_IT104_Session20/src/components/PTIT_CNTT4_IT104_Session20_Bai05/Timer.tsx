import React, { useState, useEffect } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h2>Bộ đếm thời gian</h2>
            <p>Đã trôi qua: {count} giây</p>
        </div>
    );
}