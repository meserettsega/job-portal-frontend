// src/pages/Services.js


import React, { useState } from 'react';
import '../styles/cvupload.css';
import '../styles/resumeSample.css';
import sampleBg from '../image/image.png';
import '../styles/animate.css';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  profession: '',
  summary: '',
  skills: '',
  experience: '',
  education: '',
};


const Services = () => {
  const [form, setForm] = useState(initialState);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth logic

  // Simulate login for demo (replace with real auth check)
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  return (
    <>
      {/* Section 1: Welcome with background image and login/register */}
      <section className="resume-welcome-section" style={{ backgroundImage: `url(${sampleBg})` }}>
        <div className="resume-welcome-overlay">
          <h1 className="animate__animated animate__fadeInDown">Welcome to Resume Building!</h1>
          <p className="animate__animated animate__fadeInUp">Build your resume to get the job or other opportunities. Make your first impression count!</p>
          <div className="resume-login-promo animate__animated animate__fadeInUp animate__delay-1s">
            <span role="img" aria-label="lock">🔒</span> To build and save your CV/Resume, you must <a href="/login" style={{ color: '#007bff', textDecoration: 'underline' }}>login</a> or <a href="/register" style={{ color: '#007bff', textDecoration: 'underline' }}>register</a> first.
          </div>
        </div>
      </section>

      {/* Section 2: About Resume and Tips with animation */}
      <section className="resume-about-section animate__animated animate__fadeInLeft">
        <div className="resume-sample-box">
          <h2 className="resume-sample-title">Build Your Professional CV/Resume</h2>
          <p style={{ color: '#555', marginBottom: 18 }}>
            A well-crafted CV or resume is your ticket to landing your dream job in Ethiopia. Our builder helps you create a modern, professional document that stands out to employers in today's competitive market.
          </p>
          <div className="resume-sample-section">
            <strong>What is a CV/Resume?</strong>
            <p style={{ margin: '8px 0 0 0', color: '#444' }}>
              A CV (Curriculum Vitae) or resume is a summary of your education, skills, and work experience. In Ethiopia, employers look for clear, concise, and honest information that matches the job requirements.
            </p>
          </div>
          <div className="resume-sample-section">
            <strong>How to Build:</strong>
            <ol style={{ margin: '8px 0 0 18px', color: '#444' }}>
              <li>Login or register to access the builder.</li>
              <li>Fill in your personal, education, and work details.</li>
              <li>Preview your CV instantly and make edits as needed.</li>
              <li>Download or save your CV for job applications.</li>
            </ol>
          </div>
          <div className="resume-tips animate__animated animate__pulse animate__delay-1s">
            <strong>Tips for a Great CV/Resume in Ethiopia:</strong>
            <ul style={{ margin: '10px 0 0 18px' }}>
              <li>Be honest and accurate—employers value integrity.</li>
              <li>Highlight skills relevant to the job (e.g., digital skills, languages, teamwork).</li>
              <li>Keep it concise (1-2 pages) and easy to read.</li>
              <li>Include up-to-date contact information.</li>
              <li>Show achievements, not just duties (e.g., "Increased sales by 20%" or "Developed a mobile app for local users").</li>
              <li>Use English or Amharic as required by the employer.</li>
              <li>Tailor your CV for each job application—read the job description carefully.</li>
              <li>For fresh graduates, focus on education, internships, and volunteer work.</li>
              <li>Proofread for spelling and grammar errors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Sample CV with animation and attractive frame */}
    <section className="resume-sample-section animate__animated animate__fadeInRight">
        <div className="resume-sample-frame resume-sample-box animate__animated animate__zoomIn animate__delay-1s">
          <strong>Sample CV/Resume (Image):</strong>
          <img
            src="/cv.png" // Place your sample image in the public folder and use the correct filename here
            alt="Sample CV"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '14px',
              marginTop: '12px',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
            }}
          />
          {/* <div style={{ marginTop: 8, textAlign: 'center' }}>
            <span style={{ color: '#888', fontSize: '0.95em' }}>
              This is a sample CV image for your reference.<br />
              <a href="/cv-sample.jpg" target="_blank" rel="noopener noreferrer">Click here to view or download the sample CV image</a>.
            </span>
          </div> */}
        </div>
        {isLoggedIn && (
          <div className="resume-builder-section animate__animated animate__fadeInUp animate__delay-2s" style={{ marginTop: 32 }}>
            {!showPreview ? (
              <form className="upload-section" onSubmit={handleSubmit} style={{ alignItems: 'stretch' }}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="file-input"
                  required
                  style={{ marginBottom: 12 }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="file-input"
                  required
                  style={{ marginBottom: 12 }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="file-input"
                  style={{ marginBottom: 12 }}
                />
                <input
                  type="text"
                  name="profession"
                  placeholder="Profession/Title"
                  value={form.profession}
                  onChange={handleChange}
                  className="file-input"
                  style={{ marginBottom: 12 }}
                />
                <textarea
                  name="summary"
                  placeholder="Professional Summary (2-3 sentences)"
                  value={form.summary}
                  onChange={handleChange}
                  className="file-input"
                  rows={2}
                  style={{ marginBottom: 12 }}
                />
                <textarea
                  name="skills"
                  placeholder="Skills (comma separated)"
                  value={form.skills}
                  onChange={handleChange}
                  className="file-input"
                  rows={2}
                  style={{ marginBottom: 12 }}
                />
                <textarea
                  name="experience"
                  placeholder="Work Experience (e.g. Company, Role, Years, Achievements)"
                  value={form.experience}
                  onChange={handleChange}
                  className="file-input"
                  rows={3}
                  style={{ marginBottom: 12 }}
                />
                <textarea
                  name="education"
                  placeholder="Education (e.g. Degree, School, Year)"
                  value={form.education}
                  onChange={handleChange}
                  className="file-input"
                  rows={2}
                  style={{ marginBottom: 20 }}
                />
                <button type="submit" className="upload-button">Preview Resume</button>
              </form>
            ) : (
              <div className="upload-section" style={{ alignItems: 'stretch', textAlign: 'left' }}>
                <h3 style={{ textAlign: 'center', color: '#007bff' }}>Resume Preview</h3>
                <div style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px #eee', marginBottom: 20 }}>
                  <h2 style={{ margin: 0 }}>{form.fullName}</h2>
                  <p style={{ margin: '4px 0', color: '#555' }}>{form.profession}</p>
                  <p style={{ margin: '4px 0', color: '#555' }}>{form.email} | {form.phone}</p>
                  <hr style={{ margin: '12px 0' }} />
                  <strong>Summary:</strong>
                  <p>{form.summary}</p>
                  <strong>Skills:</strong>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {form.skills.split(',').map((skill, i) => skill.trim() && <li key={i}>{skill.trim()}</li>)}
                  </ul>
                  <strong>Experience:</strong>
                  <p>{form.experience}</p>
                  <strong>Education:</strong>
                  <p>{form.education}</p>
                </div>
                <button className="upload-button" onClick={handleEdit} style={{ marginRight: 10 }}>Edit</button>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
