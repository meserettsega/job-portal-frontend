import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Import external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLinkClassName = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Abyssinia Job
      </Link>
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            className={getLinkClassName("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            className={getLinkClassName("/jobs")}
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={getLinkClassName("/services")}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={getLinkClassName("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item-buttons">
          <Link
            to="/login"
            className="nav-button"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="nav-button primary"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
