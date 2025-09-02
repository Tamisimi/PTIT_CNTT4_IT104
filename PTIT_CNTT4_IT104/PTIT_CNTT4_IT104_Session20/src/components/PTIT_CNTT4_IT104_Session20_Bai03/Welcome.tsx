import React, { useEffect, useState } from 'react'

export default function Welcome() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("Chào mừng các bạn đến với ứng dụng của chúng tôi!");
        console.log("Coponents đã được render lần đầu");
    }, []);

    return (
        <div>
            <h2>{message}</h2>

        </div>
    )
}


