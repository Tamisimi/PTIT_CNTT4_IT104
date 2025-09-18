/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
    const profileData = useSelector((state: any) => state.profile.profile);

    return (
        <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Thông Tin Người Dùng</h2>
            <p><strong>ID:</strong> {profileData.id}</p>
            <p><strong>Họ Tên:</strong> {profileData.fullName}</p>
            <p><strong>Giới Tính:</strong> {profileData.gender}</p>
            <p><strong>Ngày Sinh:</strong> {profileData.birthDate}</p>
            <p><strong>Địa Chỉ:</strong> {profileData.address}</p>
        </div>
    );
}