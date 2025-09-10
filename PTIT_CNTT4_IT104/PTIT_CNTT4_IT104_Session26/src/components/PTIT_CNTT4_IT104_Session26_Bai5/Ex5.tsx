import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import Login from './Login';

export default function Ex5() {
    const routes = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/account",
            element: <PrivateRouter />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}