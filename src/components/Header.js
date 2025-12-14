import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex justify-between items-center px-4 md:px-8 py-4 transition-all duration-300 ease-in-out ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-950/90 border-b border-gray-800 shadow-2xl' 
            : 'bg-gradient-to-b from-gray-950 to-transparent'
        }`}
      >
        <div className="flex items-center group">
          <div className="relative mr-4">
            <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-sm group-hover:bg-emerald-500/30 transition-colors"></div>
            <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <span className="text-[10px] font-bold text-gray-900">G</span>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg md:text-xl font-bold">Gayatri Mangire</h1>
            <span className="text-emerald-400 text-xs md:text-sm font-medium">Full-Stack Developer</span>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20' 
                        : 'text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/18-LOqfSvy1HxFiCuaVPUiI05IKt0ghGC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
          >
            View Resume
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-emerald-300 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.header>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>
        
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900 border-l border-gray-800 shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <h2 className="text-white text-lg font-semibold">Navigation</h2>
            <button
              className="text-gray-400 hover:text-emerald-300 transition-colors"
              onClick={toggleMenu}
              aria-label="Close navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col p-6 space-y-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-3 px-4 rounded-lg text-gray-300 hover:text-emerald-300 hover:bg-gray-800/50 transition-all duration-300 text-base font-medium"
                  onClick={toggleMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            
            <li className="mt-8 pt-6 border-t border-gray-800">
              <a
                href="https://drive.google.com/file/d/18-LOqfSvy1HxFiCuaVPUiI05IKt0ghGC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;