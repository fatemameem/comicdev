import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/constants';
import { Menu, X } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Navbar height offset
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-comic-paper dark:bg-comic-dark-bg border-b-2 border-comic-black dark:border-gray-700 shadow-comic-sm dark:shadow-comic-dark-sm py-3 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div 
          className="font-comic font-bold text-2xl cursor-pointer relative group text-comic-black dark:text-comic-dark-text"
          onClick={() => scrollTo('about')}
        >
          <span className="relative z-10">DEV<span className="text-comic-yellow text-outline-black">STRIP</span></span>
          <svg className="absolute -bottom-1 -left-1 w-full h-3 text-comic-yellow opacity-0 group-hover:opacity-100 transition-opacity z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-comic">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-lg relative px-2 transition-colors ${
                activeSection === item.id ? 'font-bold text-comic-black dark:text-comic-black' : 'text-comic-black dark:text-comic-dark-text hover:text-gray-600 dark:hover:text-gray-300 selection:bg-comic-yellow selection:text-black'
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-comic-yellow transform -skew-x-12 -z-10 rounded-sm"></span>
              )}
              {item.label}
            </button>
          ))}
          
          <div className="w-px h-6 bg-comic-black dark:bg-gray-700 mx-2"></div>
          <ThemeToggle/>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <button onClick={toggleTheme} className="text-comic-black dark:text-comic-dark-text">
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button> */}
          <ThemeToggle/>
          <button className="text-comic-black dark:text-comic-dark-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-comic-paper dark:bg-comic-dark-bg border-b-2 border-comic-black dark:border-gray-700 shadow-comic dark:shadow-comic-dark p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-comic text-xl text-left py-2 px-4 border-2 border-transparent bg-transparent text-comic-black dark:text-comic-dark-text ${
                activeSection === item.id ? 'bg-comic-yellow text-comic-black border-comic-black shadow-comic-sm dark:shadow-none' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};