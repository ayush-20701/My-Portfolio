import React, { useState, useRef } from 'react';
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { achvmtData } from '../data/AchievementData';

const Achievements = ({ isDarkMode }) => {
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

  const handleAchievementClick = (certificateLink) => {
    if (certificateLink) {
      window.open(certificateLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleExternalLinkClick = (e, externalLink) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    }
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
      id="achievements" 
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
            My <span style={{ color: '#da7422' }}>Achievements</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
          >
            Certifications, awards, and recognitions that showcase my continuous learning journey
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
            {achvmtData.map((achievement) => (
              <div
                key={achievement.id}
                onClick={() => handleAchievementClick(achievement.certificateLink)}
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
                {/* Achievement Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: '#da7422' }}
                  >
                    <Award size={16} style={{ color: '#f9f6f2' }} />
                  </div>
                  
                  {/* Achievement Type Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ 
                      backgroundColor: '#da7422',
                      color: '#f9f6f2'
                    }}
                  >
                    {achievement.type}
                  </div>
                </div>

                {/* Achievement Content */}
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
                    {achievement.title}
                  </h3>

                  {/* Issuer */}
                  <p 
                    className="text-sm font-medium mb-2"
                    style={{ color: '#da7422' }}
                  >
                    {achievement.issuer}
                  </p>

                  {/* Description */}
                  <p 
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                  >
                    {achievement.description}
                  </p>

                  {/* Date */}
                  <div 
                    className="flex items-center gap-2 mb-4 text-sm"
                    style={{ color: isDarkMode ? '#e8e4df' : '#4e4e4e' }}
                  >
                    <Calendar size={14} />
                    <span>{formatDate(achievement.date)}</span>
                  </div>

                  {/* Skills/Technologies */}
                  {achievement.skills && achievement.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                              color: isDarkMode ? '#f9f6f2' : '#000000'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                        {achievement.skills.length > 3 && (
                          <span
                            className="px-2 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: isDarkMode ? '#4e4e4e' : '#e8e4df',
                              color: isDarkMode ? '#f9f6f2' : '#000000'
                            }}
                          >
                            +{achievement.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Certificate Button */}
                  {achievement.certificateLink && (
                    <button
                      onClick={(e) => handleExternalLinkClick(e, achievement.certificateLink)}
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
                      <Trophy size={14} />
                      View Certificate
                    </button>
                  )}
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
              Scroll to explore achievements →
            </span>
          </div>
        </div>

        {/* View All Achievements Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open('https://linkedin.com/in/ayush20701', '_blank', 'noopener,noreferrer')}
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
            <Award size={20} />
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;