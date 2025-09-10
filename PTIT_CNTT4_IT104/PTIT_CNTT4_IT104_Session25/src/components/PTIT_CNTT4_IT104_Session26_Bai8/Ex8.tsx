import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListUser from './ListUser'
import UserDetail from './UserDetail'
import NotFound from './NotFound'

export default function Bai8() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <ListUser />
        },
        {
            path: "/user/:id",
            element: <UserDetail />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}