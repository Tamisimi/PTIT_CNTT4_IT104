import { useState } from 'react';

type Job = {
    id: number;
    title: string;
    status: boolean;
};

export default function Exersice09() {
    const [tasks, setTasks] = useState<Job[]>([
        {
            id: 1,
            title: 'học reactjs hook',
            status: false,
        },
        {
            id: 2,
            title: 'Code',
            status: false,
        },
    ]);
    const [newTask, setNewTask] = useState<string>('');

    const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const handleTaskAddition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTask.trim() === '') {
            alert('Không được để trống');
            return;
        }
        const isDuplicate = tasks.some((item) => item.title === newTask);
        if (isDuplicate) {
            alert('Nội dung đã tồn tại');
            return;
        }
        const newJob: Job = {
            id: new Date().getTime(),
            title: newTask,
            status: false,
        };
        setTasks((prevTasks) => [...prevTasks, newJob]);
        setNewTask('');
    };

    const handleTaskRemoval = (idToDelete: number) => {
        const confirmed = confirm('Bạn có chắc muốn xóa không');
        if (confirmed) {
            setTasks(tasks.filter((item) => item.id !== idToDelete));
        }
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            )
        );
    };

    function countFinishedTasks() {
        return tasks.filter((task) => task.status).length;
    }

    return (
        <div>
            <h3>Danh sách công việc</h3>
            <form onSubmit={handleTaskAddition}>
                <input type="text" value={newTask} onChange={handleInputUpdate} />
                <button type="submit">Thêm</button>
            </form>
            <div>
                <ul>
                    {tasks.map((item) => (
                        <li key={item.id}>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={item.status}
                                    onChange={() => toggleTaskCompletion(item.id)}
                                />
                                {item.status ? (
                                    <span style={{ textDecoration: 'line-through' }}>{item.title}</span>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                                <button>Sửa</button>
                                <button onClick={() => handleTaskRemoval(item.id)}>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <p>Công việc đã hoàn thành: {countFinishedTasks()} / {tasks.length}</p>
        </div>
    );
}