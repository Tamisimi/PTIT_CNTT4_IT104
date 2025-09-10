import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Student from './Student';

export default function Ex2() {
    const routes = createBrowserRouter([
        {
            path: "/student",
            element: <h1>Student</h1>,
        },
        {
            path: "/student/:name",
            element: <Student />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}