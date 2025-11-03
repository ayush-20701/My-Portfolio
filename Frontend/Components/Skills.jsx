import React, { useState, useRef } from 'react';
import { skillCategories } from '../Data/SkillsData';

const Skills = ({ isDarkMode }) => {
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
      id="skills" 
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
            My <span style={{ color: '#da7422' }}>Skills</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
          >
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
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
              padding: "1rem"
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
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex-shrink-0"
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
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#da7422' }}
                    >
                      <IconComponent size={24} style={{ color: '#f9f6f2' }} />
                    </div>
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="rounded-lg p-3 border transition-all duration-200 hover:scale-105 hover:shadow-md"
                        style={{
                          backgroundColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                          borderColor: isDarkMode ? '#4e4e4e' : '#e8e4df'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkMode ? '#1c1c1c' : '#f9f6f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkMode ? '#4e4e4e' : '#e8e4df';
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span 
                            className="font-medium"
                            style={{ color: isDarkMode ? '#f9f6f2' : '#000000' }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            <span 
              className="text-sm"
              style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
            >
              Scroll to explore my skills →
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills