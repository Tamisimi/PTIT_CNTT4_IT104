import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import Login from './login';

export default function Ex6() {
    const routes = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/account",
            element: <PrivateRouter />,
            children: [
                {
                    path: "",
                    element: <Account />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}

function Account() {
    return (
        <div>
            <h1>Account Page</h1>
        </div>
    );
}