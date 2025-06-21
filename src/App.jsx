import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      {/* Profile Picture Section */}
      <div className="profile-picture-section">
        <div className="profile-picture">
          <div className="picture-placeholder">
            <span>📷</span>
            <p>Add your photo here</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Info
        </button>
        <button
          className={`tab-button ${activeTab === 'job' ? 'active' : ''}`}
          onClick={() => setActiveTab('job')}
        >
          Job
        </button>
        <button
          className={`tab-button ${activeTab === 'others' ? 'active' : ''}`}
          onClick={() => setActiveTab('others')}
        >
          Others
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'basic' && (
          <div className="profile-info">
            <div className="info-item">
              <strong>Name:</strong> Jun Kobayashi
            </div>
            <div className="info-item">
              <strong>Education:</strong> 飯田OIDE長姫高校
            </div>
            <div className="info-item">
              <strong>Hobbies:</strong>
              <div className="hobbies-container">
                <span className="hobby-tag">Reading</span>
                <span className="hobby-tag">Gaming</span>
                <span className="hobby-tag">Cooking</span>
                <span className="hobby-tag">Traveling</span>
                <span className="hobby-tag">Add your hobbies</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'job' && (
          <div className="profile-info">
            <div className="info-item">
              <strong>Job History:</strong>
              <ul className="job-list">
                <li>Company Name - Position (Year)</li>
                <li>Previous Company - Previous Position (Year)</li>
                <li>Add your actual job history here</li>
              </ul>
            </div>
            <div className="info-item">
              <strong>Programming Languages:</strong>
              <div className="skills-container">
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="stars">★★★★☆</div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="stars">★★☆☆☆</div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML</span>
                  <div className="stars">★★★★☆</div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS</span>
                  <div className="stars">★★★★☆</div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="stars">★★★☆☆</div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Java</span>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'others' && (
          <div className="profile-info">
            <div className="info-item">
              <strong>Contact Information:</strong>
              <ul className="contact-list">
                <li>📧 Email: your.email@example.com</li>
                <li>📱 Phone: +81-XX-XXXX-XXXX</li>
                <li>📍 Location: Japan</li>
              </ul>
            </div>
            <div className="info-item">
              <strong>Social Media:</strong>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="info-item">
              <strong>Additional Skills:</strong>
              <div className="additional-skills">
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Communication</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
