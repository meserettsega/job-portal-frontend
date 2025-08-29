import React, { useState } from "react";
import "../../styles/jobpost.css"; // Import external CSS

const JobPost = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the job post data to the backend API
    const jobPostData = {
      jobTitle,
      companyName,
      location,
      jobType,
      description,
      salary,
      requirements,
    };

    console.log("Job Post Data:", jobPostData);
    // Reset form fields after submission
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setJobType("Full-Time");
    setDescription("");
    setSalary("");
    setRequirements("");
  };

  return (
    <div className="job-post-container">
      <h2>Create a New Job Post</h2>
      <form onSubmit={handleSubmit} className="job-post-form">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobType">Job Type</label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPost;
