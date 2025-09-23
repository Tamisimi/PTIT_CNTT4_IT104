import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ex1 } from '../store/slices/Ex1Slicer';

export default function Ex1() {
    const result = useSelector((state: any) => {
        return state.ex1.count;
    });
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {result}</h1>
            <br />
            <button onClick={() => dispatch(ex1.increment())}>Tang</button>
            <button onClick={() => dispatch(ex1.decrement())}>Giam</button>
            <button onClick={() => dispatch(ex1.reset())}>Reset</button>
        </div>
    );
}

