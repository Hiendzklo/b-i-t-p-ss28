
import React, { useState } from 'react';
import Post from './Post';

interface PostData {
  id: number;
  title: string;
  content: string;
  author: string;
}

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([
    {
      id: 1,
      title: 'Tại sao nên học ReactJS',
      content: 'Học ReactJS để đi làm',
      author: 'David'
    },
    {
      id: 2,
      title: 'Props trong ReactJS',
      content: 'Props giúp truyền dữ liệu từ component con xuống component cha',
      author: 'Linda'
    },
    {
      id: 3,
      title: 'State trong ReactJS là gì?',
      content: 'State giúp trữ trạng thái dữ liệu bên trong một component',
      author: 'David'
    }
  ]);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ListPost;
