'use client'
import React, { useEffect, useState } from 'react';
import RichText from '../components/RichText';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.docs))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <RichText content={post.content} />
        </article>
      ))}
    </div>
  );
};

export default Blog;
