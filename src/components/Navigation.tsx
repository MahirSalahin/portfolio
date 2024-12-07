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
    <nav className={`fixed w-full z-50 transition-all duration-300 px-4 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="flex items-center justify-between overflow-x-auto">
        <a href="#" className="text-2xl font-bold flex flex-shrink-0 items-center">MS</a>
        <div className="flex items-center justify-center">
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