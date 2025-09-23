import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
    currentLanguage: 'en' | 'vi';
}

const initialState: LanguageState = {
    currentLanguage: 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.currentLanguage = state.currentLanguage === 'en' ? 'vi' : 'en';
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;