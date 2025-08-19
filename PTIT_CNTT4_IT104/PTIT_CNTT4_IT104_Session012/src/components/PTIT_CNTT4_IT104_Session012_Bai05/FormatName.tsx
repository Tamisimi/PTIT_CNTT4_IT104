import React from "react";

interface User {
    firstName: string;
    lastName: string;
}

export default function FormatName() {
    const user: User = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };

    const formatName = (user: User): string => {
        return `${user.firstName} ${user.lastName}`;
    };

    return (
        <div>
            <h1>Tên đầy đủ: {formatName(user)}</h1>
        </div>
    );
}