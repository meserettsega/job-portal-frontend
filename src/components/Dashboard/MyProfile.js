import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/maprofile.css'// Importing the external CSS file

const MyProfile = () => {
  const [fullName, setFullName] = useState('Meseret Tsega');
  const [email, setEmail] = useState('meserettse47@gmail.com');
  const [about, setAbout] = useState('');
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile-info">
        <div className="profile-field">
          <label>Full Name:</label>
          <p>{fullName}</p>
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div className="profile-field">
          <label>Tell About Yourself:</label>
          <p>{about}</p>
        </div>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default MyProfile;
