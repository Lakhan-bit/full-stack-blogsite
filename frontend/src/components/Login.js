// frontend/src/components/Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername]  = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
