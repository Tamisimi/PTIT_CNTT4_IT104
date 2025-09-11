import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
    { id: '1', title: 'Học React Router', content: 'Hiểu cách sử dụng Dynamic Routes trong React để xây dựng các trang web linh hoạt. Dynamic Routes cho phép tạo các tuyến đường dựa trên tham số, ví dụ như /blog/posts/:id. Điều này giúp quản lý nội dung động một cách hiệu quả.' },
    { id: '2', title: 'Làm quen với useNavigate', content: 'Thực hành quay lại trang trước với useNavigate là một kỹ năng quan trọng. useNavigate cung cấp khả năng điều hướng chương trình hóa, giúp người dùng dễ dàng di chuyển giữa các trang mà không cần reload toàn bộ ứng dụng.' },
    { id: '3', title: 'Thực hành Nested Routes', content: 'Khám phá cách xây dựng layout chung với Nested Routes giúp tổ chức ứng dụng tốt hơn. Nested Routes cho phép nhúng các component con vào layout cha, tạo ra cấu trúc phân cấp rõ ràng và dễ bảo trì.' },
    { id: '4', title: 'Tối ưu hóa hiệu suất React', content: 'Mẹo cải thiện hiệu suất ứng dụng React bao gồm sử dụng memoization và lazy loading. Điều này giúp giảm thời gian tải trang và tăng trải nghiệm người dùng trên các ứng dụng phức tạp.' },
    { id: '5', title: 'Giới thiệu về Hooks', content: 'Hiểu cách sử dụng Hooks trong React giúp quản lý state và side effects dễ dàng hơn. Hooks như useState và useEffect là nền tảng để xây dựng các component chức năng hiện đại.' },
];

export default function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div>
                <p>Bài viết không tồn tại.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Post Detail</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}