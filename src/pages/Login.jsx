import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <Link to="/" className="back-to-site">
          ← Back to website
        </Link>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">
          Today is a new day. It’s your day. You shape it. Sign in to start
          managing your projects.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Sign in
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social google">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google logo"
            />
            Sign in with Google
          </button>

          <button type="button" className="social facebook">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook logo"
            />
            Sign in with Facebook
          </button>
        </div>

        <p className="signup">
          Don’t have an account? <a href="#">Sign up</a>
        </p>

        <footer>© 2025 ALL RIGHTS RESERVED</footer>
      </div>

      <div className="image-container">
        <img src="/Art.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;
