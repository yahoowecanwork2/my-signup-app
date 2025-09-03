import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../css-compoents/Register.css"; // Import CSS

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setUser({
      name: formData.name,
      email: formData.email,
    });

    navigate("/profile");
  };

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.company;

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create your PopX account</h2>

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <p className="form-label">Are you an Agency? *</p>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`register-btn ${isFormValid ? "active" : ""}`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
