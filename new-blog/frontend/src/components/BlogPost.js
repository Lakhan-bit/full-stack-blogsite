// frontend/src/components/BlogPost.js
import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p._id === id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, posts]);

  return post ? (
    <div className="blog-post-container">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-content">{post.content}</p>
      <Link to="/" className="blog-post-back-link">Back to Posts</Link>
    </div>
  ) : (
    <p className="loading-message">Loading...</p>
  );
};

export default BlogPost;
