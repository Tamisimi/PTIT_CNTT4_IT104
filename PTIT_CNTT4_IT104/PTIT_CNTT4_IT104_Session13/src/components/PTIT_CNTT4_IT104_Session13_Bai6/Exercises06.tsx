import React from 'react';

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
};

type Props = {
    post: Post;
};

const DetailPost: React.FC<Props> = ({ post }) => {
    return (
        <div>
            <hr />
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.author}</p>
        </div>
    );
};

export default DetailPost;