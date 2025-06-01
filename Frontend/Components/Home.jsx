import React from 'react'
import { Moon, Sun, Linkedin, Github, Mail, ExternalLink, Download, Code, Database, Server, Smartphone, Award, Calendar, MapPin } from 'lucide-react';


const Home = ({ darkMode }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      style={{
        backgroundColor: darkMode ? '#1c1c1c' : '#f9f6f2'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo Section - First on mobile, second on desktop */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              
              {/* Main Photo Container */}
              <div 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                style={{ 
                  border: `8px solid ${darkMode ? '#4e4e4e' : '#e8e4df'}`
                }}
              >
                <img 
                  src="./src/assets/1000055310.jpg" 
                  alt="Ayush - MERN Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Icon */}
              <div 
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: '#da7422'
                }}
              >
                <Code className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#f9f6f2' }} />
              </div>
              
              {/* Background Decoration */}
              <div 
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: '#da7422' }}
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: darkMode ? '#4e4e4e' : '#e8e4df' }}
              ></div>
              
            </div>
          </div>
          
          {/* Content Section - Second on mobile, first on desktop */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
                style={{ color: darkMode ? '#f9f6f2' : '#000000' }}>
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #da7422, #da7422)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Hola Amigo!
              </span>
            </h1>
            
            {/* Introduction */}
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed"
                 style={{ color: darkMode ? '#e8e4df' : '#4e4e4e' }}>
              <p>
                Hi! I am <span className="font-semibold" style={{ color: '#da7422' }}>Ayush</span> - A MERN Stack Developer,
              </p>
              <p>Deep Learning enthusiast,</p>
              <p>pursuing B.Tech (CSE) '26</p>
            </div>
            
            {/* Email */}
            <div className="flex items-center justify-center lg:justify-start text-base sm:text-lg"
                 style={{ color: darkMode ? '#e8e4df' : '#4e4e4e' }}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushkr20701@gmail.com" target="_blank" className='flex items-center'>
                    <Mail className="h-5 w-5 mr-3" style={{ color: '#da7422' }} />
                    <span className="break-all sm:break-normal">ayushkr20701@gmail.com</span>
                </a>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              
              {/* Resume Button */}
              <button 
                className="flex items-center cursor-pointer justify-center px-6 py-3 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#da7422',
                }}
                onClick={() => {window.open('https://drive.google.com/file/d/1Bq7kgy37546E6z4vpgDHt4_3Nuz-isBR/view?usp=drive_link', '_blank')}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c5661e'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#da7422'}
              >
                <Download className="h-5 w-5 mr-2" />
                <span className="font-medium">Resume</span>
              </button>
              
              {/* Social Buttons Container */}
              <div className="flex gap-4 w-full sm:w-auto">
                {/* LinkedIn Button */}
                <button 
                  className="flex items-center cursor-pointer justify-center px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                  style={{ 
                    backgroundColor: darkMode ? '#4e4e4e' : '#1c1c1c',
                    color: darkMode ? '#f9f6f2' : '#e8e4df'
                  }}
                  onClick={() => {window.open('https://www.linkedin.com/in/ayush20701/', '_blank')}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = darkMode ? '#5a5a5a' : '#2a2a2a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = darkMode ? '#4e4e4e' : '#1c1c1c'}
                >
                  <Linkedin className="h-5 w-5 sm:mr-2" />
                  <span className="font-medium hidden sm:inline">LinkedIn</span>
                </button>
                
                {/* GitHub Button */}
                <button 
                  className="flex items-center cursor-pointer justify-center px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                  style={{ 
                    backgroundColor: darkMode ? '#4e4e4e' : '#1c1c1c',
                    color: darkMode ? '#f9f6f2' : '#e8e4df'
                  }}
                  onClick={() => {window.open('https://github.com/ayush-20701', '_blank')}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = darkMode ? '#5a5a5a' : '#2a2a2a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = darkMode ? '#4e4e4e' : '#1c1c1c'}
                >
                  <Github className="h-5 w-5 sm:mr-2" />
                  <span className="font-medium hidden sm:inline">GitHub</span>
                </button>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home