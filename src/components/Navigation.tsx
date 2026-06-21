import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Monogram from './Monogram';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'work', action: () => goToSection('work') },
    { label: 'now', action: () => goToSection('now') },
    { label: 'writing', action: () => navigate('/blog') },
    { label: 'about', action: () => goToSection('about') },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-rule bg-paper/85 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 md:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5"
          aria-label="Home"
        >
          <Monogram size={28} />
          <span className="font-mono text-sm font-medium tracking-tight text-ink">
            bharath.velamala
          </span>
        </button>

        <div className="flex items-center gap-5 md:gap-7">
          {links.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="link-underline font-mono text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
