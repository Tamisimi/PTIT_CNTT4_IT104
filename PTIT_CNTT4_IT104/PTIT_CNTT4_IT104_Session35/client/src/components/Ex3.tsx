import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/Ex3Slicer';

export default function Ex3() {
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    const dispatch = useDispatch();

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <h3>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</h3>
            <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        </div>
    );
}