import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/product" className={({ isActive }) => isActive ? "active" : ""}>Product</NavLink></li>
                    <li><NavLink to="/detail" className={({ isActive }) => isActive ? "active" : ""}>Detail</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}