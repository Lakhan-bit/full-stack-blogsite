// frontend/src/components/Register.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Register.css';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="register-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="register-input"
      />
      <button type="submit" className="register-button">Register</button>
    </form>
  );
};

export default Register;
