import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Teams() {
    return (
        <div>
            <h1>Teams Page</h1>
            <Outlet />
        </div>
    );
}