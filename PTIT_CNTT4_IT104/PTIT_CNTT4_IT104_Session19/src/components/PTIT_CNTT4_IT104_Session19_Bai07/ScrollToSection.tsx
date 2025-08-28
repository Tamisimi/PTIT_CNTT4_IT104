import React, { useReducer, useRef } from "react";

export default function ScrollToSection() {
    const initialState = { dummy: "" };

    const reducer = (state: { dummy: string }, action: { type: string }) => {
        return { ...state };
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToContent = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div>
                <h1>Cuộn tới nội dung</h1>
                <button onClick={scrollToContent}>Đi tới phần nội dung</button>
            </div>

            <div>
                <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
                <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài trang và có thể kiểm tra tính năng cuộn.</p>
                <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
            </div>

            <div ref={sectionRef}>
                <p> Đây là phần nội dung mục tiêu!</p>
            </div>
        </div>
    );
}