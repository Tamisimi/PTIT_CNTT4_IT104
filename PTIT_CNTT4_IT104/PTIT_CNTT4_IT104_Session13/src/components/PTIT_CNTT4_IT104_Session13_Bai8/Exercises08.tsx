import React, { Component } from 'react';

type Task = {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    created_at: string;
};

type State = {
    tasks: Task[];
};

export default class Todolist extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

        this.state = {
            tasks: [
                { id: 1, name: 'Thiết kế giao diện Header', assign: 'Nguyễn Văn A', status: false, created_at: formattedDate },
                { id: 2, name: 'Thiết kế giao diện Footer', assign: 'Nguyễn Văn B', status: true, created_at: formattedDate },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Danh sách công việc</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Người thực hiện</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.assign}</td>
                                <td style={{ color: task.status ? 'green' : 'red' }}>
                                    {task.status ? 'Hoàn thành' : 'Chưa hoàn thành'}
                                </td>
                                <td>{task.created_at}</td>
                                <td>Sửa | Xóa</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}