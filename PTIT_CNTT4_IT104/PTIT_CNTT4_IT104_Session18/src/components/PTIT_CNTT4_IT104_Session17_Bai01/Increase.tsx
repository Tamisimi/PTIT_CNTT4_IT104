import React, { useReducer } from "react";

export default function Increase() {
    const reducer = (state: number, action: { type: string }) => {
        switch (action.type) {
            case "INCREASE":
                return state + 1;
            default:
                return state;
        }
    };
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
        </div>
    );
}