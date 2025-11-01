import { useState, useEffect } from 'react';
import './App.css'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Achievements from '../Components/Achievements';
import Contact from '../Components/Contact';
import { ArrowUp } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';


function App() {
  // Shared state for dark mode and active section
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle section change with smooth scrolling
  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Smooth scroll to the section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navbar with shared state */}
      <Navbar 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />
      
      {/* Main Content - All sections are rendered */}
      <main>
          {/* Home Section */}
          <div id="home">
            <Home darkMode={isDarkMode} />
          </div>

          {/* Skills section */}
          <div id="skills">
            <Skills isDarkMode={isDarkMode} />
          </div>

          {/* Projects section */}
          <div id="projects">
            <Projects isDarkMode={isDarkMode} />
          </div>

          {/* Achievements section */}
          <div id="achievements">
            <Achievements isDarkMode={isDarkMode} />
          </div>

          {/* Contact section */}
          <div id="contact">
            <Contact isDarkMode={isDarkMode} />
          </div>

      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          backgroundColor: '#da7422'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#c5661e'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#da7422'}
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </div>
  )
}

export default App