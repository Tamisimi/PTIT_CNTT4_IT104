import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function RandomNumber() {
    const numbers = useSelector((state: any) => state.randomNumber.numbers);
    const dispatch = useDispatch();

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100); // Random number between 0 and 99
        dispatch({ type: 'ADD_NUMBER', payload: newNumber });
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            <p>{numbers.length > 0 ? `[${numbers.join(',')}]` : '[]'}</p>
        </div>
    );
}