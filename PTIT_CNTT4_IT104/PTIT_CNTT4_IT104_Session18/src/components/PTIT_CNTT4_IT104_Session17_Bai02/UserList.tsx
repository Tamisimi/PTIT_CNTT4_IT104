import React, { useReducer, useMemo } from "react";

export default function UserList() {
    const initialUsers = [
        { id: 1, name: "Anh", age: 20 },
        { id: 2, name: "Bình", age: 17 },
        { id: 3, name: "Châu", age: 25 },
        { id: 4, name: "Dũng", age: 16 },
    ];

    const reducer = (state: any[], action: { type: string }) => {
        switch (action.type) {
            case "UPDATE":
                return [...state];
            default:
                return state;
        }
    };
    const [users, dispatch] = useReducer(reducer, initialUsers);

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.age > 18);
    }, [users]);

    return (
        <div>
            {filteredUsers.map(user => (
                <p key={user.id}>{`Name: ${user.name}, Age: ${user.age}`}</p>
            ))}
        </div>
    );
}