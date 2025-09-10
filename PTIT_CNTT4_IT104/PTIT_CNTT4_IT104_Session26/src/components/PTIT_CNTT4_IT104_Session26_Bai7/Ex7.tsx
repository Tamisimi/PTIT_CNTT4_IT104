import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Teams from './Teams';

export default function Ex7() {
    const routes = createBrowserRouter([
        {
            path: "/teams",
            element: <Teams />,
            children: [
                {
                    index: true,
                    element: <TeamsIndex />,
                },
                {
                    path: ":teamId",
                    element: <Team />,
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