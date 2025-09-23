import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplayMode } from '../store/slices/Ex4Slicer';

export default function Ex4() {
    const isGridMode = useSelector((state: any) => state.display.isGridMode);
    const dispatch = useDispatch();

    const items = [1, 2, 3, 4];

    return (
        <div>
            <h3>List mode</h3>
            <div className={isGridMode ? 'grid-mode' : 'list-mode'}>
                {items.map((item) => (
                    <div key={item} className="item">
                        {item}
                    </div>
                ))}
            </div>
            <button onClick={() => dispatch(toggleDisplayMode())}>
                {isGridMode ? 'List mode' : 'Grid mode'}
            </button>
        </div>
    );
}