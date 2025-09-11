import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default function Ex7() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}