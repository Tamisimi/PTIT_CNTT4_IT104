import React, { useState } from 'react'

export default function Exersice01() {
    const [name] = useState("Pham Quoc Loc ")
    return (
        <div>
            <h1>bài 1</h1>
            <p> họ và tên:{name} </p>

        </div>
    )
}