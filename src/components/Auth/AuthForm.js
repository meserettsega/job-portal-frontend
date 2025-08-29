import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";
import EmployerNav from "../Navigation/EmployerNav";
import JobSeekerNav from "../Navigation/JobSeekerNav";
import JobSeekerDashboard from "../Dashboard/JobSeekerDashboard";
import EmployerDashboard from "../Dashboard/EmployerDashboard";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [description, setDescription] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInRole, setLoggedInRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isLogin) {
      // Simulate login
      if (email === "jobseeker@example.com" && role === "jobseeker") {
        setLoggedInRole("jobseeker");
      } else if (email === "employer@example.com" && role === "employer") {
        setLoggedInRole("employer");
      } else {
        alert("Invalid credentials or role!");
      }
    } else {
      // Simulate registration
      alert(`Registered as ${role}!`);
      setLoggedInRole(role);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setCompanyName("");
    setDescription("");
    setRole("jobseeker");
  };

  if (loggedInRole === "jobseeker") {
  return (
    <div className="dashboard-layout">
      <JobSeekerNav />
      <JobSeekerDashboard />
    </div>
  );
}

if (loggedInRole === "employer") {
  return (
    <div className="dashboard-layout">
      <EmployerNav />
      <EmployerDashboard />
    </div>
  );
}

  return (
    <div className="lkbody">
      <div className="auth-container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          {!isLogin && role === "employer" && (
            <div className="input-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="description">
                {role === "employer" ? "Company Description(optional)" : "Tell about yourself(optional)"}
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                option
              />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button onClick={toggleForm} className="toggle-button">
          {isLogin ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
