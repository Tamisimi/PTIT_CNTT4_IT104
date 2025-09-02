import React, { useReducer } from "react";

type State = {
    name: string;
    email: string;
};

type Action = {
    type: string;
    field: string;
    value: string;
};

export default function UserForm() {
    const initialState: State = {
        name: "",
        email: "",
    };

    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "UPDATE_FIELD":
                return { ...state, [action.field]: action.value };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: "UPDATE_FIELD", field: name, value });
    };

    return (
        <div>
            <h2>Thông tin người dùng</h2>
            <form>
                <label>Nhập tên</label> <br />
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Nhập tên"
                />
                <br />
                <label>Nhập email</label> <br />
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Nhập email"
                />
                <br />
            </form>
            <p>Tên: {state.name}</p>
            <p>Email: {state.email}</p>
        </div>
    );
}