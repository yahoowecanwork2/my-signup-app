import React from "react";
import { useNavigate } from "react-router-dom";
import "../css-compoents/Welcome.css"; // CSS import

function Welcome({ onSignup, onLogin }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="home-title">Welcome to PopX</h2>
        <p className="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/register")}
          className="btn signup-btn"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="btn login-btn"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
