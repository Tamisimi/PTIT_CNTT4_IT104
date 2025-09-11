import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

export function Ex3() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <TaskList />,
        },
        {
            path: "/task/:id",
            element: <TaskDetail />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}