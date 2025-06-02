import React, { useState, useRef } from 'react';
import { ExternalLink, Calendar, Github } from 'lucide-react';
import { projectData } from '../Data/ProjectData';

const Projects = ({ isDarkMode }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Hide scrollbar after 1.5 seconds of no scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1500);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, '_blank', 'noopener,noreferrer');
  };

  const handleDeployedLinkClick = (e, deployedLink) => {
    e.stopPropagation(); // Prevent triggering the card click
    window.open(deployedLink, '_blank', 'noopener,noreferrer');
  };

  // Custom scrollbar styles
  const scrollbarStyles = {
    scrollbarWidth: 'thin',
    scrollbarColor: isScrolling 
      ? `${isDarkMode ? '#da7422' : '#da7422'} transparent`
      : 'transparent transparent',
    transition: 'scrollbar-color 0.3s ease',
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? '#1c1c1c' : '#f9f6f2'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
          >
            My <span style={{ color: '#da7422' }}>Projects</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
          >
            A showcase of my recent work and the solutions I've built to solve real-world problems
          </p>
        </div>

        {/* Horizontal Scroll Layout - All Devices */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4"
          onScroll={handleScroll}
          style={{
            ...scrollbarStyles,
            /* Custom scrollbar for webkit browsers */
            ...(typeof window !== 'undefined' && window.CSS && window.CSS.supports('selector(::-webkit-scrollbar)') && {
              '--scrollbar-opacity': isScrolling ? '1' : '0',
            })
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              height: 6px;
            }
            
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            
            div::-webkit-scrollbar-thumb {
              background-color: ${isDarkMode ? '#da7422' : '#da7422'};
              border-radius: 10px;
              opacity: ${isScrolling ? '1' : '0'};
              transition: opacity 0.3s ease;
            }
            
            div::-webkit-scrollbar-thumb:hover {
              background-color: ${isDarkMode ? '#c96820' : '#c96820'};
            }
          `}</style>
          
          <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
            {projectData.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.githubLink)}
                className="rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden flex-shrink-0"
                style={{ 
                  width: '320px',
                  backgroundColor: isDarkMode ? '#1c1c1c' : '#f9f6f2',
                  borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#1c1c1c' : '#f9f6f2';
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: '#da7422' }}
                  >
                    <Github size={16} style={{ color: '#f9f6f2' }} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ 
                      color: isDarkMode ? '#f9f6f2' : '#000000'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#da7422';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = isDarkMode ? '#f9f6f2' : '#000000';
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                  >
                    {project.description}
                  </p>

                  {/* Date */}
                  <div 
                    className="flex items-center gap-2 mb-4 text-sm"
                    style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                  >
                    <Calendar size={14} />
                    <span>{formatDate(project.date)}</span>
                  </div>

                  {/* Deployed Link Button */}
                  <button
                    onClick={(e) => handleDeployedLinkClick(e, project.deployedLink)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 w-full justify-center"
                    style={{
                      backgroundColor: '#da7422',
                      color: '#f9f6f2'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#c96820';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#da7422';
                    }}
                  >
                    <ExternalLink size={14} />
                    View Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            <span 
              className="text-sm"
              style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
            >
              Scroll to explore projects →
            </span>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open('https://github.com/ayush-20701', '_blank', 'noopener,noreferrer')}
            className="px-8 py-3 rounded-xl text-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-3 mx-auto"
            style={{
              backgroundColor: '#da7422',
              color: '#f9f6f2'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#c96820';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#da7422';
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;