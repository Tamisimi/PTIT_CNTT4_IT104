import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}