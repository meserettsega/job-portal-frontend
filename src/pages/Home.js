import React, { useState } from 'react';
import '../styles/home.css';
import Eaglion from '../image/Screenshot (17).png'

const Home = () => {
  // State to hold search input values
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('job'); // Default to job

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchType}: ${searchTerm}`);
    // Add search logic here (e.g., API calls)
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job in Ethiopia</h1>
          <p>Your Dream Job is Await , Let's Find Together.</p>
          <a href="#search" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Search Functionality */}
      <section id="search" className="search">
        <h2>Search for Jobs or Companies</h2>
        <form className="search-bar" onSubmit={handleSearch}>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)} className='aboption'
          >
            <option  value="job">Job</option>
            <option value="company">Company</option>
          </select>
          <input
            type="text"
            placeholder={`Search for ${searchType}s...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="jobs-list">
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Company --</p>
            <p>Addis Ababa, Ethiopia</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Marketing Specialist</h3>
            <p>Company-- </p>
            <p>Remote</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Company --</p>
            <p>Addis Ababa, Ethiopia</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Marketing Specialist</h3>
            <p>Company-- </p>
            <p>Remote</p>
            <button className="apply-button">Apply Now</button>
          </div>
          {/* Add more job cards as needed */}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Job Categories</h2>
        <div className="categories-list">
          <div className="category-card">
            <h3>IT & Software</h3>
          </div>
          <div className="category-card">
            <h3>Marketing</h3>
          </div>
          <div className="category-card">
            <h3>Finance</h3>
          </div>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Testimonials */}
  

      {/* Partners/Clients */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partners-list">
          <img src={Eaglion} alt="Eaglione " />
         
          {/* Add more partner logos as needed */}
        </div>
      </section>
      
    </div>
  );
}

export default Home;
