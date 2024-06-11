// frontend/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';

/*  <AuthProvider>
      <BlogProvider>
          <BrowserRouter>
           <Navbar/>
           <Routes>
             <Route path="/" element={<BlogList/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/post/:id" element={<BlogPost/>}/>
             <Route path="/create" element={<CreatePost/>}/>
           </Routes>
         </BrowserRouter>
      </BlogProvider>
    </AuthProvider>
        */
const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
          <BrowserRouter>
           <Navbar/>
           <Routes>
             <Route path="/" element={<BlogList/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/post/:id" element={<BlogPost/>}/>
             <Route path="/create" element={<CreatePost/>}/>
           </Routes>
         </BrowserRouter>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;
