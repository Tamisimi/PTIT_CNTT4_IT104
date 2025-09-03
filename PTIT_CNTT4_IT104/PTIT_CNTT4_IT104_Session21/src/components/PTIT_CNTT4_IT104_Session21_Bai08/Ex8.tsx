import React from 'react'

export default function Ex8() {
    return (
        <div>
            <div className="flex justify-start mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>

            <div className="flex justify-end mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>

            <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded mr-2">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>

            <div className="flex justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>

            <div className="flex justify-around mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>

            <div className="flex justify-evenly">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">01</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">02</div>
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">03</div>
            </div>
        </div>
    )
}