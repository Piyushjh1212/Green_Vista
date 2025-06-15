import React from "react";
import "../Styles/Login.css"; // OR use Tailwind directly


export default function Login() {

    const handleSignUp = () =>{
        window.location.href= "/Signup"
    }
  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Welcome back</h2>
        <p>Please enter your details</p>

        <form>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button className="primary-btn">Sign in</button>

          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="g" />
            Sign in with Google
          </button>
        </form>

        <p className="footer-text">
          Don't have an account? <a onClick={handleSignUp}>Sign up</a>
        </p>
      </div>

      <div className="image-section">
        <img src='./Login.png' alt="Support" />
      </div>
    </div>
  );
}
