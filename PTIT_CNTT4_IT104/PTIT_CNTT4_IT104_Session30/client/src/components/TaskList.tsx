import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
};

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [editId, setEditId] = useState<number | null>(null);
    const [editTaskName, setEditTaskName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showCompleteModal, setShowCompleteModal] = useState(false);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const response = await axios.get<Task[]>('http://localhost:8080/tasks');
                await new Promise(resolve => setTimeout(resolve, 2000)); // Giả lập loading
                setTasks(response.data);
            } catch (error) {
                console.error('Failed to load tasks:', error);
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    const addTask = async () => {
        if (newTaskName.trim()) {
            setLoading(true);
            try {
                const response = await axios.post<Task>('http://localhost:8080/tasks', { name: newTaskName, isCompleted: false });
                await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập loading
                setTasks([...tasks, response.data]);
                setNewTaskName('');
            } catch (error) {
                console.error('Failed to add task:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    async function deleteTask(id: number) {
        try {
            await axios.delete(`http://localhost:8080/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    }

    const handleDeleteClick = (id: number) => {
        setSelectedId(id);
    };

    const handleCancelDelete = () => {
        setSelectedId(null);
    };

    const handleConfirmDelete = async () => {
        if (selectedId !== null) {
            await deleteTask(selectedId);
            setSelectedId(null);
        }
    };

    const toggleTask = async (id: number) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            const updatedTask = { ...task, isCompleted: !task.isCompleted };
            try {
                await axios.patch(`http://localhost:8080/tasks/${id}`, { isCompleted: updatedTask.isCompleted });
                setTasks(tasks.map(t => t.id === id ? updatedTask : t));
                if (tasks.every(t => t.isCompleted)) {
                    setShowCompleteModal(true);
                }
            } catch (error) {
                console.error('Failed to toggle task:', error);
            }
        }
    };

    const handleEditClick = (id: number) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            setEditId(id);
            setEditTaskName(task.name);
            setError(null);
        }
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditTaskName('');
        setError(null);
    };

    const handleUpdateTask = async () => {
        if (!editTaskName.trim()) {
            setError('Tên công việc không được để trống');
            return;
        }
        if (tasks.some(task => task.name === editTaskName && task.id !== editId)) {
            setError('Tên công việc đã tồn tại');
            return;
        }
        try {
            await axios.patch(`http://localhost:8080/tasks/${editId}`, { name: editTaskName });
            setTasks(tasks.map(task => task.id === editId ? { ...task, name: editTaskName } : task));
            handleCancelEdit();
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'all' ? true : filter === 'completed' ? task.isCompleted : !task.isCompleted
    );

    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <div className="input-section">
                <input
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Enter new task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="filter-section">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('inProgress')}>In Progress</button>
            </div>
            <div className="tasks-section">
                {loading ? (
                    <div className="loading">Loading data...</div>
                ) : (
                    filteredTasks.slice(0, 5).map(task => (
                        <div key={task.id} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => toggleTask(task.id)}
                            />
                            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                                {task.name}
                            </span>
                            <button onClick={() => handleEditClick(task.id)}>Edit</button>
                            <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
            {selectedId !== null && (
                <div className="modal">
                    <h3>Confirm Deletion</h3>
                    <p>Are you sure you want to delete task ID {selectedId}?</p>
                    <button onClick={handleCancelDelete}>Cancel</button>
                    <button onClick={handleConfirmDelete} style={{ background: 'red', color: 'white' }}>Delete</button>
                </div>
            )}
            {editId !== null && (
                <div className="modal">
                    <h3>Edit Task</h3>
                    <input
                        value={editTaskName}
                        onChange={(e) => setEditTaskName(e.target.value)}
                        placeholder="Update task name"
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={handleCancelEdit}>Cancel</button>
                    <button onClick={handleUpdateTask} style={{ marginLeft: '10px', background: 'green', color: 'white' }}>Update</button>
                </div>
            )}
            {showCompleteModal && (
                <div className="modal">
                    <h3>Congratulations!</h3>
                    <p>Hoàn thành công việc</p>
                    <button onClick={() => setShowCompleteModal(false)}>Close</button>
                </div>
            )}
        </div>
    );
}