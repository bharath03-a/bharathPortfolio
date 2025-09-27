
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BrandIsland = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}>
      <button
        onClick={scrollToHome}
        className="bg-gray-600/20 backdrop-blur-md border border-gray-400/40 shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600/30 transition-all duration-300"
      >
        <span className="text-2xl font-bold text-black hover:text-gray-600 transition-colors duration-200">
          B
        </span>
      </button>
    </div>
  );
};

export default BrandIsland;
