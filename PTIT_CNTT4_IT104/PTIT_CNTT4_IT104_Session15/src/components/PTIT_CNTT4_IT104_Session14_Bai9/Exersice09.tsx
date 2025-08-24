import React, { Component } from 'react';

type Task = {
    name: string;
    completed: boolean;
};

type State = {
    tasks: Task[];
    newTask: string;
    editTask: string | null;
    showModal: boolean;
    taskToDelete: string | null;
    error: string;
};

export default class App extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
            newTask: '',
            editTask: null,
            showModal: false,
            taskToDelete: null,
            error: '',
        };
    }

    componentDidUpdate(prevProps: {}, prevState: State) {
        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        }
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newTask: e.target.value, error: '' });
    };

    handleAddOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { newTask, tasks, editTask } = this.state;

        if (!newTask.trim()) {
            this.setState({ error: 'Tên công việc không được để trống' });
            return;
        }

        if (tasks.some(task => task.name === newTask && newTask !== editTask)) {
            this.setState({ error: 'Tên công việc không được phép trùng' });
            return;
        }

        if (editTask) {
            this.setState(prevState => ({
                tasks: prevState.tasks.map(task =>
                    task.name === editTask ? { ...task, name: newTask } : task
                ),
                editTask: null,
                newTask: '',
                error: '',
            }));
        } else {
            this.setState(prevState => ({
                tasks: [...prevState.tasks, { name: newTask, completed: false }],
                newTask: '',
                error: '',
            }));
        }
    };

    handleDelete = (taskName: string) => {
        this.setState({ showModal: true, taskToDelete: taskName });
    };

    handleConfirmDelete = () => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.name !== prevState.taskToDelete),
            showModal: false,
            taskToDelete: null,
        }));
    };

    handleCancelDelete = () => {
        this.setState({ showModal: false, taskToDelete: null });
    };

    handleToggleComplete = (taskName: string) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.name === taskName ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    handleEdit = (taskName: string) => {
        this.setState({ editTask: taskName, newTask: taskName });
    };

    render() {
        const { tasks, newTask, editTask, showModal, taskToDelete, error } = this.state;

        return (
            <div>
                <h2>Todo List</h2>
                <form onSubmit={this.handleAddOrUpdate}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">{editTask ? 'Cập nhật' : 'Thêm'}</button>
                    {error && <p>{error}</p>}
                </form>
                <ul>
                    {tasks.map(task => (
                        <li key={task.name}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.handleToggleComplete(task.name)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.name}
                            </span>
                            <button onClick={() => this.handleEdit(task.name)}>Sửa</button>
                            <button onClick={() => this.handleDelete(task.name)}>Xóa</button>
                        </li>
                    ))}
                </ul>
                {showModal && (
                    <div>
                        <p>Xác nhận xóa "{taskToDelete}"?</p>
                        <button onClick={this.handleConfirmDelete}>Có</button>
                        <button onClick={this.handleCancelDelete}>Không</button>
                    </div>
                )}
            </div>
        );
    }
}