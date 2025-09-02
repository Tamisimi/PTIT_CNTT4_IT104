import React, { useState, useEffect } from "react";

export default function PageTitle() {
    const [username, setUsername] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    useEffect(() => {
        document.title = username ? `Chào ${username}!` : "Chưa nhập tên";
    }, [username]);

    return (
        <div>
            <h2>Cập nhật tiêu đề trang</h2>
            <input type="text" value={username} onChange={handleChange} placeholder="Nhập tên của bạn"
            />
        </div>
    );
}