import React from 'react'

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Login account</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Your email</label>
                    <input
                        type="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="name@company.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="••••••••"
                    />
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Login an account
                </button>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline">Register here</a>
                </p>
            </div>
        </div>
    )
}