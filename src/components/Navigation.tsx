import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-200">MS</a>
        <div className="flex items-center space-x-8">
          <a href="#about" className="relative text-text-primary hover:text-primary transition-colors duration-300 hover:bg-hover-bg rounded-lg px-3 py-2">
            About
          </a>
          <a href="#projects" className="relative text-text-primary hover:text-primary transition-colors duration-300 hover:bg-hover-bg rounded-lg px-3 py-2">
            Projects
          </a>
          <a href="#contact" className="relative text-text-primary hover:text-primary transition-colors duration-300 hover:bg-hover-bg rounded-lg px-3 py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};