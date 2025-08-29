import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/fotter.css'; // Import external CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/" className="footer-button">
          Home
        </Link>
        <Link to="/jobs" className="footer-button">
          Jobs
        </Link>
        <Link to="/services" className="footer-button">
          Services
        </Link>
        <Link to="/about" className="footer-button">
          About Us
        </Link>
        <Link to="/contact" className="footer-button">
          Contact Us
        </Link>
        <Link to="/login" className="footer-button">
          Login
        </Link>
        <Link to="/register" className="footer-button primary">
          Register
        </Link>
      </div>
      
      <div className="footer-info">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            We are a leading job placement and career service platform dedicated to connecting employers with top talent and helping job seekers find their dream jobs. Our mission is to streamline the hiring process and provide valuable career resources to help individuals achieve their professional goals.
          </p>
        </div>
        
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>
            Address: 123 Career St, Job City, Ethiopia<br />
            Phone: +251 999 962 999<br />
            Email: info@Abyssiniajob.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
