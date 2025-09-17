import React, { useEffect, type ChangeEvent } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    image: string;
    date: string;
    status: boolean;
    content: string;
}

export default function ListPost() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const [post, setPost] = useState<Post>({
        id: 0,
        title: "",
        image: "",
        date: "18/09/2025",
        status: true,
        content: ""
    });
    const [updateId, setUpdateId] = useState<number>(-1);
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("");

    const handleClose = () => {
        setShow(false);
        setPost({ id: 0, title: "", image: "", date: "18/09/2025", status: true, content: "" });
        setUpdateId(-1);
    };
    const handleShow = () => setShow(true);

    async function getAllPost() {
        try {
            const response = await axios.get("http://localhost:8080/posts");
            setPosts(response.data);
        } catch (error) {
            console.error("Lỗi API: ", error);
        }
    }

    useEffect(() => {
        getAllPost();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSave = async () => {
        if (post.title === "" || post.image === "" || post.content === "") {
            alert("Không được để trống thông tin");
            return;
        }
        if (posts.some((p) => p.title === post.title && p.id !== updateId)) {
            alert("Tên bài đăng đã tồn tại");
            return;
        }
        try {
            if (updateId === -1) {
                const response = await axios.post("http://localhost:8080/posts", post);
                setPosts([...posts, response.data]);
            } else {
                await axios.put(`http://localhost:8080/posts/${updateId}`, post);
                setPosts(posts.map((p) => (p.id === updateId ? { ...post, id: updateId } : p)));
            }
            handleClose();
        } catch (error) {
            console.error("Lỗi khi lưu bài viết: ", error);
        }
    };

    const handleBlock = async (id: number) => {
        if (window.confirm("Chặn/Bỏ chặn bài viết?")) {
            try {
                const currentPost = posts.find((p) => p.id === id);
                if (currentPost) {
                    await axios.patch(`http://localhost:8080/posts/${id}`, { status: !currentPost.status });
                    getAllPost();
                }
            } catch (error) {
                console.error("Lỗi khi chặn/bỏ chặn: ", error);
            }
        }
    };

    const handleEdit = (post: Post) => {
        setPost(post);
        setUpdateId(post.id);
        handleShow();
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Xóa bài đăng này?")) {
            try {
                await axios.delete(`http://localhost:8080/posts/${id}`);
                getAllPost();
            } catch (error) {
                console.error("Lỗi khi xóa bài viết: ", error);
            }
        }
    };

    const searchPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    const filteredSearchPosts = searchPosts.filter((post) =>
        filter === "true" ? post.status === true : filter === "false" ? post.status === false : true
    );

    return (
        <div>
            <h1>Danh sách bài viết</h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <input
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    style={{ height: "38px", padding: "0 10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
                    value={filter}
                    style={{ height: "38px", borderRadius: "4px", border: "1px solid #ccc" }}
                >
                    <option value="" disabled>
                        Lựa chọn
                    </option>
                    <option value="true">Đã xuất bản</option>
                    <option value="false">Chưa xuất bản</option>
                    <option value="">Tất cả</option>
                </select>
                <Button variant="primary" onClick={handleShow}>
                    Thêm bài viết
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{updateId === -1 ? "Thêm bài viết mới" : "Sửa bài viết"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tên bài viết</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={handleChange}
                                name="title"
                                value={post.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                name="image"
                                value={post.image}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung bài viết</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleChange}
                                name="content"
                                value={post.content}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        {updateId === -1 ? "Lưu bài viết" : "Cập nhật"}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Ngày viết</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSearchPosts.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>
                                <img
                                    src={item.image}
                                    alt="post"
                                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                                />
                            </td>
                            <td>{item.date}</td>
                            <td>{item.status ? "Đã xuất bản" : "Chưa xuất bản"}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => handleBlock(item.id)}
                                    style={{ marginRight: "5px" }}
                                >
                                    {item.status ? "Chặn" : "Bỏ chặn"}
                                </Button>
                                <Button
                                    variant="info"
                                    onClick={() => handleEdit(item)}
                                    style={{ marginRight: "5px" }}
                                >
                                    Sửa
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                                    Xóa
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}