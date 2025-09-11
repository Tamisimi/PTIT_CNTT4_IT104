import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/About">About</Link> |<Link to="/Contact">Contact</Link>
            </nav>
            <h1>Chào mừng bạn đến với ứng dụng giới thiệu của bản thân tôi</h1>
        </div>
    )
}
