import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

export default function UserDashboard() {
    const loggedInUser = useSelector((state: any) => state.user.loggedInUser);

    useEffect(() => {
        if (loggedInUser) {
            console.log('Logged in user:', loggedInUser);
        }
    }, [loggedInUser]);

    return (
        <div>
            <Login />
        </div>
    );
}