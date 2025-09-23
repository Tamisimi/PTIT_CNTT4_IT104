import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/slices/Ex5Slicer';
import { Menu, Button } from 'antd';
import {
    ClockCircleOutlined,
    UserOutlined,
    DollarOutlined,
    LineChartOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

export default function Ex5() {
    const isCollapsed = useSelector((state: any) => state.menu.isCollapsed);
    const dispatch = useDispatch();

    const menuItems = [
        { key: '1', icon: <ClockCircleOutlined />, label: 'Bảng điều khiển' },
        { key: '2', icon: <UserOutlined />, label: 'Tài khoản' },
        { key: '3', icon: <DollarOutlined />, label: 'Tài sản' },
        { key: '4', icon: <LineChartOutlined />, label: 'Thống kê' },
        { key: '5', icon: <FileOutlined />, label: 'Tài liệu' },
    ];

    return (
        <div>
            <Menu
                mode="inline"
                inlineCollapsed={isCollapsed}
                items={menuItems}
                style={{ width: isCollapsed ? 80 : 256 }}
            />
            <Button
                onClick={() => dispatch(toggleMenu())}
                icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
        </div>
    );
}