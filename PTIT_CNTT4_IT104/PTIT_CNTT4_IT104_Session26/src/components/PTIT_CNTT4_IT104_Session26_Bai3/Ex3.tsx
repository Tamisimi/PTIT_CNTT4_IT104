import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Student from './Student';

export default function Ex3() {
    const routes = createBrowserRouter([
        {
            path: "/student",
            element: <Student />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}