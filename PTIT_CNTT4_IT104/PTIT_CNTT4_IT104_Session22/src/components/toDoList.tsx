import React, { useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    likes: number;
}

export default function UserInterface() {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: 'Tiêu đề 1', content: 'Nội dung 1', likes: 0 },
        { id: 2, title: 'Tiêu đề 2', content: 'Nội dung 2', likes: 1 },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nextId, setNextId] = useState(3);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postCount = posts.length;
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    const handleAddPost = (title: string, content: string) => {
        if (title.trim() && content.trim()) {
            setPosts([...posts, { id: nextId, title, content, likes: 0 }]);
            setNextId(nextId + 1);
            setIsModalOpen(false);
            setTitle('');
            setContent('');
        }
    };

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleLikePost = (id: number) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const isValid = title.trim() && content.trim();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            handleAddPost(title, content);
        }
    };

    const onCancel = () => {
        setIsModalOpen(false);
        setTitle('');
        setContent('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 p-6">
            <div className="flex justify-between text-white text-lg font-semibold mb-6">
                <span>{postCount} Bài viết</span>
                <span>Lượt thích {totalLikes}</span>
            </div>
            <div className="flex justify-between mb-6">
                <select className="p-2 bg-white bg-opacity-50 rounded-lg text-gray-700">
                    <option>Lọc theo: Tất cả bài viết</option>
                </select>
                <button
                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                    onClick={() => setIsModalOpen(true)}
                >
                    Tạo bài viết
                </button>
            </div>
            <div className="space-y-4">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-600">{post.content}</p>
                        <div className="flex items-center mt-2">
                            <button
                                className="text-red-500 mr-2"
                                onClick={() => handleLikePost(post.id)}
                            >
                                ❤️ {post.likes}
                            </button>
                            <button
                                className="text-gray-500 mr-2"
                                onClick={() => handleDeletePost(post.id)}
                            >
                                🗑️
                            </button>
                            <span className="text-gray-400">S</span>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onCancel}>
                    <div className="bg-white p-6 rounded-lg w-96" onClick={e => e.stopPropagation()}>
                        <h2 className="text-xl font-semibold mb-4">Bài viết của bạn</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">Tiêu đề*</label>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <label className="block mb-2">Nội dung*</label>
                            <textarea
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded mr-2 disabled:bg">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }


