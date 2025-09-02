import React, { useReducer } from "react";

type Item = {
    id: number;
    name: string;
    description: string;
};

type State = {
    keyword: string;
    filteredItems: Item[];
};

type Action = {
    type: string;
    payload?: string;
};

const initialData: Item[] = [
    { id: 1, name: "Laptop Dell", description: "Máy tính xách tay hiệu suất cao" },
    { id: 2, name: "Điện thoại iPhone", description: "Smartphone cao cấp từ Apple" },
    { id: 3, name: "Tai nghe Sony", description: "Tai nghe không dây chất lượng tốt" },
];

export default function Search() {
    const initialState: State = {
        keyword: "",
        filteredItems: initialData,
    };

    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "UPDATE_KEYWORD":
                const keyword = action.payload || "";
                const filtered = initialData.filter((item) =>
                    item.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    item.description.toLowerCase().includes(keyword.toLowerCase())
                );
                return { ...state, keyword, filteredItems: filtered };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "UPDATE_KEYWORD", payload: e.target.value });
    };

    return (
        <div>
            <h2>Tìm kiếm</h2>
            <input
                type="text"
                value={state.keyword}
                onChange={handleChange}
                placeholder="Nhập từ khóa..."
            />
            <h3>Kết quả:</h3>
            <ul>
                {state.filteredItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}