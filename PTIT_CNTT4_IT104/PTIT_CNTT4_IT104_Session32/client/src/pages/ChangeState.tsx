import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ChangeState() {
    const company = useSelector((state: any) => state.company.company);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{company}</p>
            <button onClick={() => dispatch({ type: 'CHANGE_COMPANY' })}>Change state</button>
        </div>
    );
}