import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  };

  return (
    <section
      className="contact-section"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e9f0fa 0%, #f7fafc 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        className="contact-container"
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          maxWidth: "480px",
          width: "100%",
          padding: "32px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#007bff",
            marginBottom: "18px",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Contact Us
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "24px" }}>
          Have questions or need support? Fill out the form below and our team will get back to you soon.
        </p>
        {submitted ? (
          <div style={{ textAlign: "center", color: "#28a745", fontWeight: 500 }}>
            Thank you for contacting us! We will respond as soon as possible.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "18px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #007bff 0%, #0056b3 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1em",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
                transition: "background 0.2s",
              }}
            >
              Send Message
            </button>
          </form>
        )}
        <div style={{ marginTop: "32px", textAlign: "center", color: "#888", fontSize: "0.95em" }}>
          <div>
            <strong>Email:</strong> info@abysinia-job.com
          </div>
          <div>
            <strong>Phone:</strong> +251 912 345678
          </div>
          <div>
            <strong>Address:</strong> Addis Ababa, Ethiopia
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;