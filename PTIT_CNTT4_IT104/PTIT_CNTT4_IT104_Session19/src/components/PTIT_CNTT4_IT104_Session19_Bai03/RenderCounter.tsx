import React, { useRef, useState } from 'react'

export default function RenderCounter() {
    const [inputValue, setInputValue] = useState('');
    const ref = useRef(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        ref.current++;
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Da render: {ref.current} lan</p>
        </div>
    )
}
