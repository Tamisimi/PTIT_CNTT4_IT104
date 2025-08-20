import React, { Component } from 'react';
import DetailPost from './Exercises06';

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
};

type State = {
    posts: Post[];
};

export default class ListPost extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [
                { id: 1, title: 'Tài sao nên học ReactJS', content: 'Học ReactJS để làm', author: 'David' },
                { id: 2, title: 'Props trong ReactJS', content: 'Props giúp truyền dữ liệu từ component con xuống component cha', author: 'Linda' },
                { id: 3, title: 'State trong ReactJS là gì?', content: 'State giúp trạng thái dữ liệu bên trong một component', author: 'David' },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Danh sách bài viết</h2>
                {this.state.posts.map((post) => (
                    <DetailPost key={post.id} post={post} />
                ))}
            </div>
        );
    }
}