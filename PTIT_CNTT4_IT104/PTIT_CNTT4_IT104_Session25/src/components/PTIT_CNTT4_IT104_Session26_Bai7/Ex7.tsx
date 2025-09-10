import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomLink from './CustomLink'
import NotFound from './NotFound'
import HomePage from './HomePage'

export default function Bai7() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <CustomLink />
        },
        {
            path: "/homePage",
            element: <HomePage />
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