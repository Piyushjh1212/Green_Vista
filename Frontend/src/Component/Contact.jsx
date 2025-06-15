import React from "react";
import "./Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Let's talk about <br /> everything!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Voluptas debitis, fugit natus?</p>
        <img src="/contact-illustration.svg" alt="Contact Illustration" className="contact-image" />
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="6" placeholder="Write your message"></textarea>
          <button type="submit" className="Contact_button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
