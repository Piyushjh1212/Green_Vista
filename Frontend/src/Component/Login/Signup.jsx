import React from "react";
import "../Styles/Signup.css"; // Same CSS structure as login

export default function Signup() {
    const HandleLoginAtSignUp = () => {
        window.location.href = "/Login"
    }
  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Create an account</h2>
        <p>Enter your details to sign up</p>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="primary-btn">Sign up</button>

          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="g" />
            Sign up with Google
          </button>
        </form>

        <p className="footer-text">
          Already have an account? <a onClick={HandleLoginAtSignUp}>Sign in</a>
        </p>
      </div>

      <div className="image-section">
        <img src="jksfjds.jpg" alt="Sign up visual" />
      </div>
    </div>
  );
}
