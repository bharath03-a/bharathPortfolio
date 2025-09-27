
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const scrollToHome = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const isHomeSection = location.pathname === '/';

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/50 backdrop-blur-md shadow-lg border-gray-400/30' : 'bg-white/20 backdrop-blur-md border-gray-400/40'
    } border rounded-full px-6 py-1.5`}>
      <div className="flex items-center space-x-4">
        {/* Brand Logo */}
        <button
          onClick={scrollToHome}
          className="bg-gray-600/20 backdrop-blur-md border border-gray-400/40 shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600/30 transition-all duration-300"
        >
          <span className="text-lg font-bold text-black hover:text-gray-600 transition-colors duration-200 font-styrene">
            B
          </span>
        </button>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-sm transition-colors duration-200 font-medium font-styrene ${
              isHomeSection ? 'text-black bg-gray-600/20 px-3 py-1 rounded-full' : 'text-black hover:text-gray-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={handleProjectsClick}
            className={`text-sm transition-colors duration-200 font-medium font-styrene ${
              isCurrentPage('/projects') ? 'text-black bg-gray-600/20 px-3 py-1 rounded-full' : 'text-black hover:text-gray-600'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => navigate('/blog')}
            className={`text-sm transition-colors duration-200 font-medium font-styrene ${
              isCurrentPage('/blog') ? 'text-black bg-gray-600/20 px-3 py-1 rounded-full' : 'text-black hover:text-gray-600'
            }`}
          >
            Blog
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
