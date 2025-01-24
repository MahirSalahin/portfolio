import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Home, User, Code, Mail, Menu, X, Code2 } from 'lucide-react';

const NavItem = ({ href, label, icon: Icon, isMobile = false }: { href: string; label: string; icon: any; isMobile?: boolean }) => {
  return (
    <a 
      href={href} 
      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
        isMobile 
          ? 'w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-800'
          : 'px-3 py-2'
      }`}
    >
      <span className={`absolute inset-0 bg-primary-500/10 dark:bg-primary-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ${
        isMobile ? 'hidden' : 'block'
      }`} />
      <Icon className="w-4 h-4 text-primary-500 dark:text-primary-400" />
      <span className="relative text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {label}
      </span>
    </a>
  );
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsOpen(false);
  };

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDark ? 'bg-dark-900/95' : 'bg-white/95'} shadow-sm backdrop-blur-sm py-2` 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a 
            href="#" 
            className={`text-xl font-bold flex items-center ${
              isDark ? 'text-white' : 'text-gray-900'
            } hover:text-primary-500 transition-colors duration-300`}
            onClick={handleNavClick}
          >
            MS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavItem href="#" label="Home" icon={Home} />
            <NavItem href="#about" label="About" icon={User} />
            <NavItem href="#cp" label="CP" icon={Code2} />
            <NavItem href="#projects" label="Projects" icon={Code} />
            <NavItem href="#contact" label="Contact" icon={Mail} />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isDark 
                ? 'hover:bg-dark-800' 
                : 'hover:bg-gray-100'
            } transition-colors duration-200`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className={`mt-2 rounded-lg shadow-lg ${
            isDark ? 'bg-dark-900' : 'bg-white'
          }`}>
            <div className="py-2" onClick={handleNavClick}>
              <NavItem href="#" label="Home" icon={Home} isMobile />
              <NavItem href="#about" label="About" icon={User} isMobile />
              <NavItem href="#projects" label="Projects" icon={Code} isMobile />
              <NavItem href="#cp" label="CP" icon={Code2} isMobile />
              <NavItem href="#contact" label="Contact" icon={Mail} isMobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};