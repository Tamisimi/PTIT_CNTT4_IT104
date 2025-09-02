import React, { useReducer } from "react";

export default function Counter() {
    const initialState = { count: 0 };

    const reducer = (state: { count: number }, action: { type: string }) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 };
            case "DECREMENT":
                return { count: state.count - 1 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter</h2>
            <p>Số lần đếm: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
        </div>
    );
}