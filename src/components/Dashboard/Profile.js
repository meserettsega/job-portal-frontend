import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/maprofile.css'; // Importing the external CSS file

const Profile = () => {
  const [fullName, setFullName] = useState('Meseret Tsega');
  const [email, setEmail] = useState('meserettse47@gmail.com');
  const [companyName, setCompanyName] = useState('Tech Solutions Ltd.');
  const [description, setDescription] = useState('A leading software development company specializing in innovative solutions.');

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    navigate('/login');
  };

  const handleEdit = () => {
    navigate('/Register')
    // Handle the edit functionality here (e.g., opening an edit form)
    console.log('Edit functionality to be implemented');
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
          <label>Company Name:</label>
          <p>{companyName}</p>
        </div>
        <div className="profile-field">
          <label>Company Description:</label>
          <p>{description}</p>
        </div>
      </div>
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
