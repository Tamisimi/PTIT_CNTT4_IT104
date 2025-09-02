import React, { useState } from "react";

export default function UserProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [displayInfo, setDisplayInfo] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);

    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisplayInfo(`Tên: ${name}\nEmail: ${email}`);
    };

    return (
        <div>
            <h2>Thông tin người dùng</h2>
            <form onSubmit={handleSubmit}>
                <label>Nhập tên</label> <br />
                <input type="text" value={name} onChange={handleNameChange} placeholder="Nhập tên" /><br />
                <label>Nhập email</label> <br />
                <input type="text" value={email} onChange={handleEmailChange} placeholder="Nhập email" /><br />
                <button type="submit">Gửi</button>
            </form>
            {displayInfo && <p>{displayInfo}</p>}
        </div>
    );
}