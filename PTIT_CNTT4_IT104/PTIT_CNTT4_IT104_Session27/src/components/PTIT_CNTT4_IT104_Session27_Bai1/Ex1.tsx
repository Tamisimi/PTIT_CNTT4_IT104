import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Ex1() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/Contact",
            element: <Contact />
        }

    ]);
    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}
