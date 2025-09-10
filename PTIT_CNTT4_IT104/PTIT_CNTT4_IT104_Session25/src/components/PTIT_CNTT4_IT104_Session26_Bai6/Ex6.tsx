import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Detail from './Detail'

const Navigation = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const goProduct = () => {
        navigate('/product');
    };

    const goDetail = () => {
        navigate('/detail');
    };

    return (
        <div>
            <div>
                <button onClick={goHome}>
                    Đi tới Home
                </button>
                <button onClick={goProduct}>
                    Đi tới Product
                </button>
                <button onClick={goDetail}>
                    Đi tới Detail
                </button>
            </div>
            <Outlet />
        </div>
    );
};

export default function Bai1() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Navigation />,
            children: [
                { index: true, element: <Home /> },
                { path: 'product', element: <Product /> },
                { path: 'detail', element: <Detail /> }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={routes}></RouterProvider>
        </div>
    )
}