import React, { forwardRef } from 'react'
import '../Styles/Honors.css'

const Honors = forwardRef((props, ref) => {
  const achievements = [
    {
      id: 1,
      type: "achievement",
      title: "4th Rank - Hackathon 'InnovateX 4.0'",
      organization: "GIET, Bhuvneshwar",
      date: "April 2025",
      description: "Grabbed the 4th Rank among 120+ teams at 'InnovateX 4.0', a 30-hour hackathon by GIET, Bhubaneshwar.",
      icon: "🏆"
    },
    {
      id: 2,
      type: "achievement",
      title: "Top 20 - Hackathon 'Hack Horizon 2025'",
      organization: "Arka Jain University ",
      date: "April 2025",
      description: "Secured the Top 20 position in the hackathon 'Hack Horizon', among 150 teams, organized by Arka Jain University in collaboration with Google Developers group.",
      icon: "🏆"
    },
    {
      id: 3,
      type: "certification",
      title: "Basic Robotics to Underwater Exploration using AUV's and ROV's",
      organization: "NIT Jamshedpur",
      date: "Sep 2024",
      description: "Completed 5 day workshop on underwater robotics by NIT Jamshedpur",
      icon: "📜",
      credentialId: ""
    },
    {
      id: 4,
      type: "certification",
      title: "Problem Solving (Basic)",
      organization: "HackerRank",
      date: "Mar 2024",
      description: "Completed basic level problem solving in C++ language.",
      icon: "📜",
      credentialId: "F51B4CBA12B1"
    },
  ];

  const renderCard = (item) => (
    <div key={item.id} className={`honor-card ${item.type}`}>
      <div className="card-header">
        <span className="card-icon">{item.icon}</span>
        <span className={`card-type ${item.type}`}>
          {item.type === 'achievement' ? 'Achievement' : 'Certification'}
        </span>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-organization">{item.organization}</p>
        <p className="card-date">{item.date}</p>
        <p className="card-description">{item.description}</p>
        {item.credentialId && (
          <div className="credential-id">
            <span>ID: {item.credentialId}</span>
          </div>
        )}
      </div>
      
      <div className="card-footer">
        <button className="view-btn">
          {item.type === 'certification' ? 'View Certificate' : 'Learn More'}
        </button>
      </div>
    </div>
  );

  return (
    <div className='honors section section2' ref={ref}>
      <div className="heading">ACHIEVEMENTS & CERTIFICATIONS</div>
      
      <div className="honors-container">
        <div className="section-intro">
          <p>A collection of my professional achievements and certifications that showcase my commitment to continuous learning and excellence.</p>
        </div>
        
        <div className="honors-filter">
          <button className="filter-btn active" data-filter="all">All</button>
          <button className="filter-btn" data-filter="achievement">Achievements</button>
          <button className="filter-btn" data-filter="certification">Certifications</button>
        </div>
        
        <div className="honors-grid">
          {achievements.map(renderCard)}
        </div>
        
        <div className="honors-stats">
          <div className="stat-item">
            <span className="stat-number">{achievements.filter(item => item.type === 'achievement').length}</span>
            <span className="stat-label">Achievements</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{achievements.filter(item => item.type === 'certification').length}</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Date().getFullYear() - 2022}</span>
            <span className="stat-label">Years Active</span>
          </div>
        </div>
      </div>
    </div>
  )
})

Honors.displayName = 'Honors'

export default Honors