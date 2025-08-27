import React, { useReducer, useCallback } from "react";

export default function LoginForm() {
    const initialState = { email: "", password: "" };

    const reducer = (state: { email: string; password: string }, action: { type: string; field: string; value: string }) => {
        switch (action.type) {
            case "UPDATE":
                return { ...state, [action.field]: action.value };
            default:
                return state;
        }
    };
    const [formData, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = useCallback(() => {
        console.log("email:", formData.email, "password:", formData.password);
    }, [formData.email, formData.password]);

    return (
        <div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => dispatch({ type: "UPDATE", field: "email", value: e.target.value })}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => dispatch({ type: "UPDATE", field: "password", value: e.target.value })}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}