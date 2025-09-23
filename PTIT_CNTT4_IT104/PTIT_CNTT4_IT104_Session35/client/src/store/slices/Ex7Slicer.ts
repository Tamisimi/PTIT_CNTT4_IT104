import { createSlice } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    isFavorite: boolean;
}

interface FavoritesState {
    users: User[];
}

const initialState: FavoritesState = {
    users: [
        { id: 1, name: 'Nguyễn Văn A', isFavorite: true },
        { id: 2, name: 'Nguyễn Văn B', isFavorite: false },
        { id: 3, name: 'Nguyễn Văn C', isFavorite: true },
        { id: 4, name: 'Nguyễn Văn D', isFavorite: true },
    ],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const userId = action.payload;
            const user = state.users.find((u) => u.id === userId);
            if (user) {
                user.isFavorite = !user.isFavorite;
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;