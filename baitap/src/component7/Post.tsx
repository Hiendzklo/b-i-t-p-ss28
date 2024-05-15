
import React from 'react';

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id, title, content, author } = post;

  return (
    <div>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default Post;
