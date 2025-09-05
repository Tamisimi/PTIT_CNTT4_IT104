import { Button, Input } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
    id: number | string;
    name: string;
    isCompleted: boolean;
}

export default function TodoList() {
    const [task, setTask] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>(() => {
        const taskLocals = localStorage.getItem("tasks");
        return taskLocals ? JSON.parse(taskLocals) : [];
    });
    const [editingTaskId, setEditingTaskId] = useState<string | number | null>(null);
    const [editText, setEditText] = useState<string>("");

    // Handle input change
    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setError("Tên công việc không được để trống");
        } else {
            setError("");
        }
        setTask(event.target.value);
    };

    // Handle form submit
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!task) {
            setError("Tên công việc không được để trống");
            return;
        }

        const newTask: Task = {
            id: uuid(),
            name: task,
            isCompleted: false,
        };

        const taskClones = [...tasks, newTask];
        setTasks(taskClones);
        localStorage.setItem("tasks", JSON.stringify(taskClones));
        setTask("");
    };

    // Handle task status change
    const handleChangeStatus = (id: number | string) => {
        const updateTasks = tasks.map((task: Task) => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });

        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
    };

    // Handle task deletion
    const handleDeleteTask = (id: number | string) => {
        const updatedTasks = tasks.filter((task: Task) => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Handle task edit initiation
    const handleEditTask = (task: Task) => {
        setEditingTaskId(task.id);
        setEditText(task.name);
    };

    // Handle edit input change
    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(event.target.value);
    };

    // Handle edit submission
    const handleEditSubmit = (id: number | string) => {
        if (!editText) {
            setError("Tên công việc không được để trống");
            return;
        }

        const updatedTasks = tasks.map((task: Task) => {
            if (task.id === id) {
                return { ...task, name: editText };
            }
            return task;
        });

        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setEditingTaskId(null);
        setEditText("");
    };

    // Calculate completed tasks
    const completedTasks = tasks.filter((task: Task) => task.isCompleted).length;

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
                <h3 className="text-center text-[24px] font-semibold mb-6">
                    Danh sách công việc
                </h3>
                <form onSubmit={handleSubmit} className="flex gap-5 mb-3">
                    <Input
                        value={task}
                        onChange={handleChangeTask}
                        placeholder="Nhập tên công việc"
                    />
                    <Button htmlType="submit" type="primary">
                        Thêm
                    </Button>
                </form>

                {error && (
                    <p className="mb-6 text-red-600 text-[14px]">
                        {error}
                    </p>
                )}

                <ul className="mb-6">
                    {tasks.map((task: Task) => (
                        <li key={task.id} className="flex justify-between items-center py-2">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => handleChangeStatus(task.id)}
                                />
                                {editingTaskId === task.id ? (
                                    <div className="flex items-center gap-2">
                                        <Input
                                            value={editText}
                                            onChange={handleEditChange}
                                            onPressEnter={() => handleEditSubmit(task.id)}
                                        />
                                        <Button
                                            type="primary"
                                            onClick={() => handleEditSubmit(task.id)}
                                        >
                                            Lưu
                                        </Button>
                                        <Button
                                            onClick={() => setEditingTaskId(null)}
                                        >
                                            Hủy
                                        </Button>
                                    </div>
                                ) : (
                                    <span className={task.isCompleted ? "line-through" : ""}>
                                        {task.name}
                                    </span>
                                )}
                            </div>
                            {editingTaskId !== task.id && (
                                <div className="flex items-center gap-3">
                                    <Pencil
                                        size={18}
                                        className="text-orange-400 hover:text-orange-600 cursor-pointer"
                                        onClick={() => handleEditTask(task)}
                                    />
                                    <Trash2
                                        size={18}
                                        className="text-red-400 hover:text-red-600 cursor-pointer"
                                        onClick={() => handleDeleteTask(task.id)}
                                    />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div>
                    <span>Công việc đã hoàn thành: </span>
                    <span>{completedTasks}</span> / <span>{tasks.length}</span>
                </div>
            </div>
        </div>
    );
}