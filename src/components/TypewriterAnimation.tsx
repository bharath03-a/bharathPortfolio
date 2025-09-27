
import { useState, useEffect } from 'react';

const TypewriterAnimation = () => {
  const roles = ['Engineer', 'Scientist', 'Analyst'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animatedLetters, setAnimatedLetters] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (animatedLetters < currentRole.length) {
      const timer = setTimeout(() => {
        setAnimatedLetters(animatedLetters + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Wait 2 seconds before moving to next role
      const timer = setTimeout(() => {
        setAnimatedLetters(0);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animatedLetters, currentRoleIndex, roles]);

  const currentRole = roles[currentRoleIndex];

  return (
    <div className="text-gray-800 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center lg:justify-start gap-3 flex-wrap">
      <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Data
      </span>
      <span className="relative">
        <span className="text-gray-900 font-black tracking-tight">
          {currentRole.split('').map((letter, index) => (
            <span
              key={`${currentRoleIndex}-${index}`}
              className={`inline-block transition-all duration-500 transform ${
                index < animatedLetters 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-20 translate-y-2 scale-90'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
        {/* Animated underline */}
        {/* <div className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
             style={{ width: `${(animatedLetters / currentRole.length) * 100}%` }}>
        </div> */}
      </span>
      <span className="text-4xl lg:text-6xl animate-pulse" style={{
        animation: 'colorPulse 2s ease-in-out infinite',
      }}>!</span>
    </div>
  );
};

export default TypewriterAnimation;
