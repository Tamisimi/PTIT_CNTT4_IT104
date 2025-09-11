import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Detail from './Detail';

export default function Ex6() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Header />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "product",
                    element: <Product />,
                },
                {
                    path: "detail",
                    element: <Detail />,
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