import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../store/slices/Ex6Slicer';

export default function Ex6() {
    const language = useSelector((state: any) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const content = language === 'vi' ? 'Học viện Rikkei' : 'Rikkei Academy';

    return (
        <div>
            <select value={language} onChange={() => dispatch(toggleLanguage())}>
                <option value="vi">Vietnamese</option>
                <option value="en">English</option>
            </select>
            <p>{content}</p>
        </div>
    );
}