import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'

export default function Bai1() {
    const routes = createBrowserRouter([
        {
            path: '/login',
            element: <Login></Login>
        }
    ])
    return (
        <div>
            <RouterProvider router={routes}></RouterProvider>
        </div>
    )
}