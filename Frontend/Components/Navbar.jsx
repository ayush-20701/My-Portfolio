import React, { useState } from "react";
// import { Moon, Sun, Mail, ExternalLink, Download, Code, Database, Server, Smartphone, Award, Calendar, MapPin } from 'lucide-react';
import { Home, Moon, Sun, Menu, X } from 'lucide-react';


const Navbar = ({ isDarkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact Me' }
  ];



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const themeClasses = isDarkMode 
    ? 'bg-[#1c1c1c] border-[#4e4e4e]' 
    : 'bg-[#f9f6f2] border-[#e8e4df]';

  const textClasses = isDarkMode 
    ? 'text-[#f9f6f2]' 
    : 'text-[#000000]';

  const buttonClasses = isDarkMode
    ? 'hover:bg-[#4e4e4e] active:bg-[#4e4e4e]'
    : 'hover:bg-[#bcbcbc] active:bg-[#e8e4df]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${themeClasses} border-b backdrop-blur-md transition-all duration-300`}>
      <div className="px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
            
          {/* Home Button - Left */}
          <button
            onClick={() => handleSectionClick('home')}
            className={`flex items-center gap-2 px-4 py-2 text-xl rounded-lg transition-all duration-200 ${textClasses} ${buttonClasses} ${
              activeSection === 'home' 
                ? 'bg-[#da7422] text-white shadow-lg transform scale-105' 
                : ''
            }`}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </button>

          {/* Section Buttons - Center */}
          <div className="flex items-center gap-32 justify-between text-l">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${textClasses} ${buttonClasses} ${
                  activeSection === section.id 
                    ? 'bg-[#da7422] text-white shadow-lg transform scale-105' 
                    : ''
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle - Right */}
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-lg transition-all duration-200 ${textClasses} ${buttonClasses} hover:scale-110`}
          >
            {isDarkMode ? <Sun size={30} /> : <Moon size={30} />}
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Home Button */}
          <button
            onClick={() => handleSectionClick('home')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${textClasses} ${buttonClasses} ${
              activeSection === 'home' 
                ? 'bg-[#da7422] text-white' 
                : ''
            }`}
          >
            <Home size={18} />
            <span className="font-medium text-sm">Home</span>
          </button>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${textClasses} ${buttonClasses}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg transition-all duration-200 ${textClasses} ${buttonClasses}`}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 border-t ${isDarkMode ? 'border-[#4e4e4e]' : 'border-[#e8e4df]'}`}>
            <div className="flex flex-col gap-2">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${textClasses} ${buttonClasses} ${
                    activeSection === section.id 
                      ? 'bg-[#da7422] text-white' 
                      : ''
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      
    </nav>
  );
};

export default Navbar;
