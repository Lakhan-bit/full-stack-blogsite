// frontend/src/context/BlogContext.js
import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${window.location.origin}/api/posts`);
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const addPost = async (title, content, author) => {
    const res = await fetch(`${window.location.origin}/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author }),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};
