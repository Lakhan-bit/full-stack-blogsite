// frontend/src/components/BlogList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import './BlogList.css';

const BlogList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post._id} className="blog-post">
          <h2 className="blog-post-title">{post.title}</h2>
          <p className="blog-post-content">{post.content}</p>
          <Link to={`/post/${post._id}`} className="blog-post-link">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
