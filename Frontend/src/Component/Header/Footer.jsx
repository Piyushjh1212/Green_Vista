import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import "../Styles/Footer.css";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left">
        <h2>We bake emails too.<br />Sign up to receive the latest news.</h2>
        <div className="email-subscribe">
          <input type="email" placeholder="Email Address" />
          <button>&#10148;</button>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
        </div>
        <p>Levain Bakery All Rights Reserved 2025</p>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <ul>
            <li>GET IN TOUCH</li>
            <li>JOIN OUR TEAM</li>
            <li>ABOUT</li>
            <li>FAQ</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY</li>
          </ul>
          <ul>
            <li>COOKIE CLUB</li>
            <li>MERCH</li>
            <li>TERMS OF SERVICE</li>
            <li>GIVE $15, GET $15</li>
            <li>SHIPPING</li>
            <li>CALIFORNIA CCPA</li>
          </ul>
        </div>
      </div>
    </footer>
    <FooterBottom/>
    </>
  );
};

export default Footer;
