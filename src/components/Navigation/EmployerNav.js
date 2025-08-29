import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBuilding, FaUser, FaBars } from "react-icons/fa";
import "../../styles/EmployerNav.css";

const EmployerNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false); // Sidebar open state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger toggle button */}
      {isMobile && (
        <button
          className="sidebar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <nav className={`employer-sidebar ${isMobile && isOpen ? "open" : ""}`}>
        <div className="employer-sidebar__brand">
          Abyssinia <span className="highlight">Job</span>
        </div>

        <ul className="employer-sidebar__menu">
          <li>
            <NavLink
              to="/employer/home"
              className={({ isActive }) =>
                isActive ? "employer-link active" : "employer-link"
              }
            >
              <FaHome className="employer-icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employer/jobpost"
              className={({ isActive }) =>
                isActive ? "employer-link active" : "employer-link"
              }
            >
              <FaBuilding className="employer-icon" />
              <span>Job Post</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employer/profile"
              className={({ isActive }) =>
                isActive ? "employer-link active" : "employer-link"
              }
            >
              <FaUser className="employer-icon" />
              <span>My Profile</span>
            </NavLink>
          </li>
        </ul>

        <div className="employer-sidebar__footer">
          © {new Date().getFullYear()} Abyssinia Job
        </div>
      </nav>
    </>
  );
};

export default EmployerNav;
