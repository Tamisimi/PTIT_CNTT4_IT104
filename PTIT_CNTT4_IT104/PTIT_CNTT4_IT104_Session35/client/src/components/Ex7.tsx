import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/slices/Ex7Slicer';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

export default function Ex7() {
    const users = useSelector((state: any) => state.favorites.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>List Favorites User</h3>
            {users.map((user: any) => (
                <div key={user.id}>
                    <p>UserName: {user.name}</p>
                    <p>
                        Favorites:{' '}
                        {user.isFavorite ? (
                            <HeartFilled onClick={() => dispatch(toggleFavorite(user.id))} />
                        ) : (
                            <HeartOutlined onClick={() => dispatch(toggleFavorite(user.id))} />
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
}