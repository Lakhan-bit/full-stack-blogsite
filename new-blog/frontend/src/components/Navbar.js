// frontend/src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  //console.log(user);
  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      {user ? (
        <>
          <Link to="/create" className="navbar-link">Create Post</Link>
          <button onClick={handleLogout} className="navbar-button">{`Logout (${user.username})`}</button>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
