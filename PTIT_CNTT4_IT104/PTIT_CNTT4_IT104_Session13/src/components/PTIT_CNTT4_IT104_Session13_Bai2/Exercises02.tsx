import React, { Component } from 'react';

type Information = {
    id: number;
    name: string;
    birthDate: string;
    address: string;
};

export default class Exercise02 extends Component<{}, Information> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyễn Văn Sơn",
            birthDate: "20/12/2023",
            address: "Thanh Xuân, Hà Nội",
        };
    }

    render() {
        return (
            <div>
                <h2>Thông tin cá nhân</h2>
                <p>id: {this.state.id}</p>
                <p>Tên: {this.state.name}</p>
                <p>Ngày sinh: {this.state.birthDate}</p>
                <p>Địa chỉ: {this.state.address}</p>
            </div>
        );
    }
}