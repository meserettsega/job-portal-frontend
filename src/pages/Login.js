import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobSeeker"); // Default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and redirect based on role
    if (role === "jobSeeker") {
      navigate("/jobfinder");
    } else if (role === "employer") {
      navigate("/employer");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="optionrole"
        >
          <option value="jobSeeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
