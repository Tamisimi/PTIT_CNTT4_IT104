import { createSlice } from '@reduxjs/toolkit';

interface DisplayState {
    isGridMode: boolean;
}

const initialState: DisplayState = {
    isGridMode: false,
};

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        toggleDisplayMode: (state) => {
            state.isGridMode = !state.isGridMode;
        },
    },
});

export const { toggleDisplayMode } = displaySlice.actions;
export default displaySlice.reducer;