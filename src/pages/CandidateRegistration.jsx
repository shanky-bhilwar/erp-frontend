import React from 'react';
import { FaUserShield, FaGlobe, FaShieldAlt, FaCamera, FaSync, FaVideo, FaCircle, FaFileSignature, FaRedo, FaPaperPlane } from "react-icons/fa";



const CandidateRegistration = () => {
  return (
    <div className="container">
      {/* ======================= Header ======================= */}
      <header>
        <div className="logo">
          <FaUserShield />
          <h1>SecureHire Pro</h1>
        </div>
        <div className="user-controls">
          <button className="btn btn-secondary">
            <FaBell /> Notifications
          </button>
          <button className="btn btn-primary">
            <FaUser /> My Profile
          </button>
        </div>
      </header>

      {/* ======================= Main Content ======================= */}
      <div className="main-content">
        {/* ========= Available Positions ========= */}
        <div className="dashboard">
          <h2><FaBriefcase /> Available Positions</h2>
          <div className="jobs-grid">
            <div className="job-card">
              <h3>Senior Frontend Developer</h3>
              <div className="job-meta">
                <span><i className="fas fa-building"></i> TechCorp Inc.</span>
                <span><i className="fas fa-map-marker-alt"></i> San Francisco</span>
              </div>
              <p>Develop responsive web applications using React and modern JavaScript.</p>
              <div className="job-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">CSS</span>
              </div>
              <a href="#" className="apply-btn">Apply Now</a>
            </div>
          </div>
        </div>

        {/* ========= Registration Form ========= */}
        <div className="registration-form">
          <div className="form-header">
            <h2><FaUser /> Candidate Registration</h2>
            <div>
              <p>Completion: 45%</p>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
            </div>
          </div>

          <form>
            {/* ==== Job Position ==== */}
            <div className="form-section">
              <div className="section-header">
                <h3><FaBriefcase /> Job Position</h3>
              </div>
              <div className="section-content">
                <div className="form-group">
                  <label htmlFor="job_position">Select Position Applying For</label>
                  <select id="job_position" className="form-control" required>
                    <option value="">Select a position</option>
                    <option value="Senior Frontend Developer">Senior Frontend Developer</option>
                    <option value="UX/UI Designer">UX/UI Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="HR Manager">HR Manager</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ==== Personal Details ==== */}
            <div className="form-section">
              <div className="section-header">
                <h3><FaUser /> Personal Details</h3>
              </div>
              <div className="section-content">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" className="form-control" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not">Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input type="text" id="nationality" className="form-control" placeholder="Enter your nationality" required />
                </div>
              </div>
            </div>

            {/* ==== Contact Information ==== */}
            <div className="form-section">
              <div className="section-header">
                <h3><FaAddressBook /> Contact Information</h3>
              </div>
              <div className="section-content">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Primary Phone</label>
                  <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="alt_phone">Alternative Phone</label>
                  <input type="tel" id="alt_phone" className="form-control" placeholder="Enter alternative phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Home Address</label>
                  <textarea id="address" className="form-control" rows="3" placeholder="Enter your full address" required></textarea>
                </div>
              </div>
            </div>

            {/* ==== Educational Qualifications ==== */}
            <div className="form-section">
              <div className="section-header">
                <h3><FaGraduationCap /> Educational Qualifications</h3>
              </div>
              <div className="section-content">
                {/* 10th */}
                <div className="form-group">
                  <label>10th Grade Details</label>
                  <input type="text" className="form-control" placeholder="School Name" required />
                  <input type="text" className="form-control mt-2" placeholder="Board" required />
                  <input type="text" className="form-control mt-2" placeholder="Year of Passing" required />
                  <input type="text" className="form-control mt-2" placeholder="Percentage" required />
                </div>
                {/* 12th */}
                <div className="form-group">
                  <label>12th Grade Details</label>
                  <input type="text" className="form-control" placeholder="School Name" required />
                  <input type="text" className="form-control mt-2" placeholder="Board" required />
                  <input type="text" className="form-control mt-2" placeholder="Year of Passing" required />
                  <input type="text" className="form-control mt-2" placeholder="Percentage" required />
                </div>
                {/* UG */}
                <div className="form-group">
                  <label>Undergraduate Degree</label>
                  <input type="text" className="form-control" placeholder="College/University" required />
                  <input type="text" className="form-control mt-2" placeholder="Course/Degree" required />
                  <input type="text" className="form-control mt-2" placeholder="Year of Passing" required />
                  <input type="text" className="form-control mt-2" placeholder="Percentage/CGPA" required />
                </div>
                {/* PG */}
                <div className="form-group">
                  <label>Postgraduate Degree</label>
                  <input type="text" className="form-control" placeholder="College/University" />
                  <input type="text" className="form-control mt-2" placeholder="Course/Degree" />
                  <input type="text" className="form-control mt-2" placeholder="Year of Passing" />
                  <input type="text" className="form-control mt-2" placeholder="Percentage/CGPA" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    {/* ==== Professional Details ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaBriefcase /> Professional Details</h3>
  </div>
  <div className="section-content">
    <div className="form-group">
      <label>Current Company</label>
      <input type="text" className="form-control" placeholder="Company name" />
    </div>
    <div className="form-group">
      <label>Designation</label>
      <input type="text" className="form-control" placeholder="Job title" />
    </div>
    <div className="form-group">
      <label>Experience (in years)</label>
      <input type="number" className="form-control" placeholder="Total experience" />
    </div>
    <div className="form-group">
      <label>Last CTC (Annual)</label>
      <input type="text" className="form-control" placeholder="e.g. ₹5,00,000" />
    </div>
    <div className="form-group">
      <label>Expected CTC (Annual)</label>
      <input type="text" className="form-control" placeholder="e.g. ₹6,00,000" />
    </div>
    <div className="form-group">
      <label>Notice Period</label>
      <select className="form-control">
        <option value="">Select</option>
        <option>Immediate Joiner</option>
        <option>15 Days</option>
        <option>30 Days</option>
        <option>60 Days</option>
        <option>90 Days</option>
      </select>
    </div>
  </div>
</div>

{/* ==== ESI & PF Details ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaUserShield /> ESI & PF Details</h3>
  </div>
  <div className="esi-pf-grid">
    <div className="form-group">
      <label>ESI Number</label>
      <input type="text" className="form-control" placeholder="Enter ESI number" />
    </div>
    <div className="form-group">
      <label>PF Number</label>
      <input type="text" className="form-control" placeholder="Enter PF number" />
    </div>
    <div className="form-group">
      <label>UAN Number</label>
      <input type="text" className="form-control" placeholder="Enter UAN number" />
    </div>
    <div className="form-group">
      <label>Previous Employer Name</label>
      <input type="text" className="form-control" placeholder="Previous company name" />
    </div>
    <div className="form-group">
      <label>Previous Employer Code</label>
      <input type="text" className="form-control" placeholder="Previous employer PF/ESI code" />
    </div>
  </div>
</div>

{/* ==== Portfolio & Social Media ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaGlobe /> Portfolio & Social Media</h3>
  </div>
  <div className="section-content">
    <div className="form-group">
      <label>LinkedIn URL</label>
      <input type="url" className="form-control" placeholder="https://linkedin.com/in/yourname" />
    </div>
    <div className="form-group">
      <label>GitHub URL</label>
      <input type="url" className="form-control" placeholder="https://github.com/yourusername" />
    </div>
    <div className="form-group">
      <label>Portfolio Website</label>
      <input type="url" className="form-control" placeholder="https://yourportfolio.com" />
    </div>
    <div className="form-group">
      <label>Other Relevant Links</label>
      <textarea className="form-control" placeholder="Enter any other relevant links (one per line)" rows="3"></textarea>
    </div>
  </div>
</div>

{/* ==== Identity Verification ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaShieldAlt /> Identity Verification</h3>
  </div>
  <div className="section-content">
    <div className="form-group">
      <label>Upload Passport</label>
      <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf" />
      <small className="text-muted">Upload a clear photo/scan of your passport</small>
    </div>

    <div className="verification-box">
      <h4>Real-time Selfie Verification</h4>
      <p>Take a selfie to verify your identity against your passport</p>

      <div className="capture-container">
        <div id="camera-container"></div>
        <div id="camera-preview" style={{ display: 'none' }}></div>
        <div className="camera-controls">
          <button type="button" className="capture-btn" id="start-camera">
            <FaCamera /> Start Camera
          </button>
          <button type="button" className="capture-btn" id="capture-selfie" style={{ display: 'none', background: '#4f46e5' }}>
            <FaCamera /> Capture Selfie
          </button>
          <button type="button" className="capture-btn" id="retake-selfie" style={{ display: 'none', background: '#ef4444' }}>
            <FaSync /> Retake
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ==== Video Interview ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaVideo /> Video Interview</h3>
  </div>
  <div className="video-container">
    <FaVideo size={40} />
    <p>Record a 2-minute video introducing yourself and why you're the best candidate</p>
    <button type="button" className="record-btn" id="record-video">
      <FaCircle />
    </button>
    <p id="recording-timer">Recording time: 0:00 / 2:00</p>
  </div>
</div>

{/* ==== Consent & Declaration ==== */}
<div className="form-section">
  <div className="section-header">
    <h3><FaFileSignature /> Consent & Declaration</h3>
  </div>
  <div className="section-content">
    <div className="form-group consent">
      <input type="checkbox" id="consent1" required />
      <label htmlFor="consent1">I confirm that all information provided in this application is true and accurate to the best of my knowledge.</label>
    </div>
    <div className="form-group consent">
      <input type="checkbox" id="consent2" required />
      <label htmlFor="consent2">I consent to the collection and processing of my personal data for recruitment purposes.</label>
    </div>
    <div className="form-group consent">
      <input type="checkbox" id="consent3" required />
      <label htmlFor="consent3">I agree to undergo background checks and identity verification as part of the recruitment process.</label>
    </div>
  </div>
</div>

{/* ==== Form Footer ==== */}
<div className="form-footer">
  <button type="reset" className="btn btn-secondary">
    <FaRedo /> Reset Form
  </button>
  <button type="submit" className="btn btn-primary">
    <FaPaperPlane /> Submit Application
  </button>
</div>


    </div>

    
  );
};

export default CandidateRegistration;
