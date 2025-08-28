import React, { useReducer, useState } from "react";

export default function Baitap8() {
    const initialState = {
        loading: false,
        success: false,
        error: "",
    };
    const loginReducer = (state: typeof initialState, action: any) => {
        switch (action.type) {
            case "LOGIN_START":
                return { loading: true, success: false, error: "" };
            case "LOGIN_SUCCESS":
                return { loading: false, success: true, error: "" };
            case "LOGIN_ERROR":
                return { loading: false, success: false, error: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        setTimeout(() => {
            if (username === "admin" && password === "123") {
                dispatch({ type: "LOGIN_SUCCESS" });
            } else {
                dispatch({
                    type: "LOGIN_ERROR",
                    payload: "Tài khoản hoặc mật khẩu không đúng",
                });
            }
        }, 1000);
    };

    return (
        <div>
            <h3>Đăng nhập hệ thống</h3>
            <form action="" onSubmit={handleSubmit}>
                <label>Tên đăng nhập</label> <br />
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <label>Mật khẩu</label> <br />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br />
                <button type="submit">
                    {state.loading ? "Đang xử lý..." : "Đăng nhập"}
                </button>
            </form>
            <div>
                {state.loading && <p>Đang xử lý...</p>}
                {state.success && <p>Đăng nhập thành công!</p>}
                {state.error && <p>X{state.error}</p>}
            </div>
        </div>
    );
}