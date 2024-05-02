import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    password: undefined,
    email: undefined,
    phone: undefined,
    gender: undefined,
    address: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext); // Sử dụng useContext để kết nối với AuthContext

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", user);
      console.log("registered");
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.details });
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="rContainer">
          <h1 style={{ marginBottom: "20px" }}>REGISTER</h1>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="rInput"
          />

          <input
            type="tel"
            placeholder="phone"
            id="phone"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="text"
            placeholder="gender"
            id="gender"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="text"
            placeholder="address"
            id="address"
            onChange={handleChange}
            className="rInput"
          />
          <button
            style={{ width: "236px", height: "50px", fontSize: "24px" }}
            disabled={loading}
            onClick={handleRegister}
            className="rButton"
          >
            Register
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Register;
