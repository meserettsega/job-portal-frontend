import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import JobSeekerDashboard from "../components/Dashboard/JobSeekerDashboard";
import EmployerNav from "../components/Navigation/EmployerNav";

const JobPage = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleRegister = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (

    <div>
      {userRole === null ? (
        <>
          <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
          {/* <RegisterForm  /> */}
        </>
      ) : userRole === "jobseeker" ? (
        <JobSeekerDashboard onLogout={handleLogout} />
      ) : (
        <EmployerNav onLogout={handleLogout} />
      )}
    </div>
   
  );
};

export default JobPage;
