import React, { useState } from 'react';

export default function Exersice04() {
    const [visible, setVisible] = useState(false);

    const toggle = (): void => {
        setVisible(!visible);
    };

    return (
        <div>
            <h2>Bài tập 4</h2>
            <button onClick={toggle}>
                {visible ? 'Ẩn nội dung' : 'Hiện nội dung'}
            </button>
            {visible && <p>Nội dung hiển thị khi được kích hoạt!</p>}
        </div>
    );
}