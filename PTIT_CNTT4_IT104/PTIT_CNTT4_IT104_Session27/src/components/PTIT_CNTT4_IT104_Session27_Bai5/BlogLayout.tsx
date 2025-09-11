import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function BlogLayout() {
    return (
        <div>
            <header>
                <h1>My Blog</h1>
            </header>
            <div>
                <aside>
                    <ul>
                        <li><Link to="/blog/posts">Posts</Link></li>
                    </ul>
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}