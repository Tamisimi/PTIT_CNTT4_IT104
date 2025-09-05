import React from "react";
import { Layout, Menu, Table, Button, Space, Input, DatePicker, Radio, Pagination, Checkbox } from "antd";
import { UserOutlined, SettingOutlined, AppstoreOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;
const { RangePicker } = DatePicker;

interface User {
    key: number;
    name: string;
    date: string;
    photo: string;
}

const data: User[] = [
    { key: 1, name: "Jssa Jas", date: "09 Apr 2021", photo: "" },
    { key: 2, name: "Pauline Jas", date: "26 Jan 2021", photo: "" },
    { key: 3, name: "Sherlynn Metzel", date: "27 Jan 2021", photo: "" },
    { key: 4, name: "Haily Carthew", date: "27 Jan 2018", photo: "" },
    { key: 5, name: "Dorothea Jocey", date: "12 Dec 2017", photo: "" },
    { key: 6, name: "Mikalea Pinel", date: "10 Dec 2017", photo: "" },
    { key: 7, name: "Donnell Farries", date: "03 Dec 2017", photo: "" },
    { key: 8, name: "Letizia Puncher", date: "09 Dec 2017", photo: "" },
];

export default function Manage() {
    const columns = [
        {
            title: "",
            dataIndex: "checkbox",
            render: () => <Checkbox />,
        },
        {
            title: "Photo",
            dataIndex: "photo",
            render: () => <div className="w-6 h-6 bg-gray-200" />,
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Actions",
            key: "actions",
            render: () => (
                <Space>
                    <Button icon={<EyeOutlined />} style={{ borderColor: "#d9d9d9" }} />
                    <Button icon={<EditOutlined />} style={{ borderColor: "#d9d9d9" }} />
                    <Button danger icon={<DeleteOutlined />} style={{ borderColor: "#d9d9d9" }} />
                </Space>
            ),
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light" width={200} style={{ background: "#f0f0f0" }}>
                <Menu mode="inline" defaultSelectedKeys={["2"]}>
                    <Menu.Item key="1" icon={<AppstoreOutlined />}>
                        Overview
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Content style={{ padding: "20px" }}>
                    <div className="bg-white p-4 rounded shadow-md" style={{ border: "1px solid #e8e8e8" }}>
                        <Table columns={columns} dataSource={data} pagination={false} bordered />
                        <div className="flex justify-center mt-4">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </Content>

                <Sider theme="light" width={250} style={{ padding: "20px", background: "#fafafa", borderLeft: "1px solid #e8e8e8" }}>
                    <Button type="primary" block style={{ background: "#00cc00", borderColor: "#00cc00", marginBottom: "20px" }}>
                        New User
                    </Button>

                    <div className="mb-4">
                        <p>
                            All: 32 <span className="text-blue-600 ml-2">Active: 16</span>
                        </p>
                        <p>Selected: <span className="text-blue-600">0</span></p>
                    </div>

                    <div className="mb-4">
                        <p>Date from - to:</p>
                        <RangePicker style={{ width: "100%" }} defaultValue={null} />
                    </div>

                    <div className="mb-4">
                        <p>Search by Name:</p>
                        <Input placeholder="Name" style={{ width: "100%" }} />
                    </div>

                    <div>
                        <p>Status:</p>
                        <Radio.Group defaultValue="any">
                            <Radio value="disabled">Disabled</Radio>
                            <Radio value="active">Active</Radio>
                            <Radio value="any" style={{ color: "#1890ff" }}>Any</Radio>
                        </Radio.Group>
                    </div>
                </Sider>
            </Layout>
        </Layout>
    );
}