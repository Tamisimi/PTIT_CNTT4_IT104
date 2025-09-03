import React from 'react'

export default function Ex5() {
    return (
        <div className="relative w-[300px] h-[200px] bg-blue-100 rounded-lg text-blue-700 text-center pt-10">
            Relative parent
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded">
                Absolute child
            </button>
        </div>
    )
}