import { createSlice } from '@reduxjs/toolkit';

export const ex1Reducer = createSlice({
    name: 'ex1',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});
export const ex1 = ex1Reducer.actions;
export default ex1Reducer.reducer;