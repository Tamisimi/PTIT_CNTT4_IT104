import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ThemeToggle() {
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '10px' }}>
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
                Tối
            </label>
        </div>
    );
}