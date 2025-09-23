import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    }
})

//CounterSlice.actions trả về object chứa các hành động
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;