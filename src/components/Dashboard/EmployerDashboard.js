import React, { useState } from 'react';
import '../../styles/EmployerDashboard.css';
import Eaglion from '../../image/Screenshot (17).png';

const EmployerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('job'); // Default to job

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchType}: ${searchTerm}`);
    // Add search logic here (API calls)
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Manage Jobs and Talent Efficiently</h1>
            <p>Post your jobs, find the best candidates, and manage applications easily.</p>
            <a href="#search" className="cta-button">Get Started</a>
          </div>
        </section>

        {/* Search Section */}
        <section id="search" className="search">
          <h2>Search Candidates or Jobs</h2>
          <form className="search-bar" onSubmit={handleSearch}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="search-select"
            >
              <option value="job">Job</option>
              <option value="candidate">Candidate</option>
            </select>
            <input
              type="text"
              placeholder={`Search for ${searchType}s...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </section>

        {/* Featured Jobs */}
        <section className="featured-jobs">
          <h2>Active Job Posts</h2>
          <div className="jobs-list">
            <div className="job-card">
              <h3>Software Engineer</h3>
              <p>Company --</p>
              <p>Addis Ababa, Ethiopia</p>
              <button className="apply-button">View Applications</button>
            </div>
            <div className="job-card">
              <h3>Marketing Specialist</h3>
              <p>Company--</p>
              <p>Remote</p>
              <button className="apply-button">View Applications</button>
            </div>
            <div className="job-card">
              <h3>Marketing Specialist</h3>
              <p>Company--</p>
              <p>Remote</p>
              <button className="apply-button">View Applications</button>
            </div>
            <div className="job-card">
              <h3>Marketing Specialist</h3>
              <p>Company--</p>
              <p>Remote</p>
              <button className="apply-button">View Applications</button>
            </div>
            {/* Add more job cards as needed */}
          </div>
        </section>

        {/* Job Categories */}
        <section className="categories">
          <h2>Job Categories</h2>
          <div className="categories-list">
            <div className="category-card">IT & Software</div>
            <div className="category-card">Marketing</div>
            <div className="category-card">Finance</div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners">
          <h2>Our Partners</h2>
          <div className="partners-list">
            <img src={Eaglion} alt="Eaglione" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerDashboard;
