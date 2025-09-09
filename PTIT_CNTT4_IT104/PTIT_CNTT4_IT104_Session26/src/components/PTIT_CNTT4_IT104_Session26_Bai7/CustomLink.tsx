import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Link
                to="/homePage"
                className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
            >
                Go to Home Page
            </Link>
        </div>
    )
}