import React, { useReducer } from "react";

export default function InputRadio() {
    const initialState = { selectedGender: "Nam" };

    const reducer = (state: { selectedGender: string }, action: { type: string; gender: string }) => {
        switch (action.type) {
            case "SELECT_GENDER":
                return { ...state, selectedGender: action.gender };
            default:
                return state;
        }
    };
    const [genderState, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Nam"
                    checked={genderState.selectedGender === "Nam"}
                    onChange={() => dispatch({ type: "SELECT_GENDER", gender: "Nam" })}
                />
                <label htmlFor="male">Nam</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Nữ"
                    checked={genderState.selectedGender === "Nữ"}
                    onChange={() => dispatch({ type: "SELECT_GENDER", gender: "Nữ" })}
                />
                <label htmlFor="female">Nữ</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Khác"
                    checked={genderState.selectedGender === "Khác"}
                    onChange={() => dispatch({ type: "SELECT_GENDER", gender: "Khác" })}
                />
                <label htmlFor="other">Khác</label>
            </div>
            <p>Selected gender: {genderState.selectedGender}</p>
        </div>
    );
}