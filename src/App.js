import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Fotter";

import EmployerNav from "./components/Navigation/EmployerNav";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import JobPost from './components/Dashboard/Jobpost'
import JobSeekerNav from "./components/Navigation/JobSeekerNav";
import JobSeekerDashboard from "./components/Dashboard/JobSeekerDashboard";
import UploadCv from "./components/Dashboard/UploadCv";
import CareerService from './components/Dashboard/CareeerService'
import MyProfile from "./components/Dashboard/MyProfile";
import Profile from "./components/Dashboard/Profile";

// Layout Component for Employer Pages
const EmployerLayout = () => (
  <>
    <EmployerNav />
    <Routes>
      <Route path="/" element={<Navigate to="/employer/home" />} />
      <Route path="home" element={<EmployerDashboard />} />
      <Route path="jobpost" element={<JobPost />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
   {/* Include Footer here */}
  </>
);

// Layout Component for Jobseeker Pages
const JobseekerLayout = () => (
  <>
    <JobSeekerNav />
    <Routes>
      <Route path="/" element={<Navigate to="/jobfinder/home" />} />
      <Route path="home" element={<JobSeekerDashboard />} />
      <Route path="uploadcv" element={<UploadCv />} />
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="careerservice" element={<CareerService />} />
    </Routes>
   {/* Include Footer here */}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages with Navbar and Footer */}
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/jobs" element={<><Navbar /><JobPage /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
        <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />

        {/* Employer dashboard pages WITHOUT Navbar/Footer */}
        <Route path="/employer/*" element={<EmployerLayout />} />
        {/* Jobseeker dashboard pages WITHOUT Navbar/Footer */}
        <Route path="/jobfinder/*" element={<JobseekerLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
