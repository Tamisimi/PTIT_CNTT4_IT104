import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import Posts from './Post';
import PostDetail from './PostDetail';

export function Ex5() {
    const routes = createBrowserRouter([
        {
            path: "/blog",
            element: <BlogLayout />,
            children: [
                {
                    path: "posts",
                    element: <Posts />,
                },
                {
                    path: "posts/:id",
                    element: <PostDetail />,
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