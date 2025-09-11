import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

export default function Bai1() {
    const routes = createBrowserRouter([
        {
            path: "/products",
            element: <ProductList />,
        },
        {
            path: "/products/:id",
            element: <ProductDetail />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}