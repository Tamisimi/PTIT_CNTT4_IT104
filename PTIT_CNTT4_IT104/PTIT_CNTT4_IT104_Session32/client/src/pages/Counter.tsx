/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} >Giảm</button>
        </div>
    );
}