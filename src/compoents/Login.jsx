import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../css-compoents/Login.css"; // Import CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({
        name: email.split("@")[0],
        email: email,
      });
      navigate("/profile");
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          Sign in to your <br /> PopX account
        </h2>
        <p className="login-subtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          praesentium deleniti.
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`login-btn ${isFormValid ? "active" : "disabled"}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
