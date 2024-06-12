// frontend/src/components/CreatePost.js
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import './CreatePost.css';

const CreatePost = () => {
  const { addPost } = useContext(BlogContext);
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content, user.username);
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="create-post-input"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="create-post-textarea"
      />
      <button type="submit" className="create-post-button">Create Post</button>
    </form>
  );
};

export default CreatePost;
