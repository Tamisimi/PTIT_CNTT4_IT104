import React, { Component } from 'react';

type User = {
    id: number;
    name: string;
    age: number;
};

type State = {
    users: User[];
};

export default class Exercise03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: "John", age: 30 },
                { id: 2, name: "Mary", age: 25 },
                { id: 3, name: "Jane", age: 20 },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Danh sách người dùng</h2>
                {this.state.users.map((user) => (
                    <div key={user.id}>
                        <p>Id: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}