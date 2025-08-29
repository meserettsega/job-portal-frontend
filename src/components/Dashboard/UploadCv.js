import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import '../../styles/cvupload.css';

const UploadCv = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus('');
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Logic to handle file upload
      setUploadStatus('Upload successful!');
    } else {
      setUploadStatus('Please select a file first.');
    }
  };

  return (
    <div className="upload-cv-container">
      <h2>Upload Your CV</h2>
      <div className="upload-section">
        <div className="file-input-container">
          <FaUpload className="upload-icon" />
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="file-input"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default UploadCv;
