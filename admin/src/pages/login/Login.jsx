import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import axios from 'axios';
import './login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: 'admin',
    password: 'admin',
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' }); // Update loading state
    try {
      let loginCredentials = credentials;

      // Hardcoded admin credentials
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        loginCredentials = { username: 'admin', password: 'admin' };
      } else {
        throw new Error('Invalid username or password');
      }

      // Simulating API call
      setTimeout(() => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { username: loginCredentials.username } });
        navigate('/');
      }, 1000);
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { message: err.message } });
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="lContainer">
          <h1 style={{ marginBottom: '15px', marginLeft: '15px' }}>LOGIN</h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
            style={{ marginBottom: '20px' }}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
            style={{ marginBottom: '20px' }}
          />
          <button
            style={{ width: '190px', height: '50px', fontSize: '24px' }}
            disabled={loading}
            onClick={handleClick}
            className="lButton"
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
