import React, { useState, useEffect } from "react";

export default function Register() {
    const [data, setData] = useState({ name: "", email: "" });
    const [error, setError] = useState({ name: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
            if (value === "") {
                setError({ ...error, [name]: "Trường này là bắt buộc" });
            } else if (!emailRegex.test(value)) {
                setError({ ...error, [name]: "Email không hợp lệ" });
            } else {
                setError({ ...error, [name]: "" });
            }
        } else if (value === "") {
            setError({ ...error, [name]: "Trường này là bắt buộc" });
        } else {
            setError({ ...error, [name]: "" });
        }
    };

    useEffect(() => {
        console.log("data =>", data);
        console.log("error =>", error);
    }, [data, error]);

    const handleSubmit = () => {
        if (!error.name && !error.email && data.name && data.email) {
            alert("Gửi thành công!");
        }
    };

    const isFormValid = !error.name && !error.email && data.name && data.email;

    return (
        <div>
            <input type="text" name="name" placeholder="Họ tên" value={data.name} onChange={handleChange} />
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            <input type="text" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            <button onClick={handleSubmit} disabled={!isFormValid}>Gửi</button>
        </div>
    );
}