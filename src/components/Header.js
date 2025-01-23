import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`flex justify-between items-center px-6 py-8 bg-black transition-all duration-300 ease-in-out ${
          isSticky ? 'fixed top-0 left-0 right-0 z-40 shadow-xl' : ''
        }`}
      >
        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-400 mr-4"></div>
          <h1 className="text-white text-lg sm:text-xl font-bold mr-2">Gayatri Mangire</h1>
          <span className="text-gray-400 text-sm">/ Software Developer</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white hover:text-gray-400 text-base"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? 'fixed' : 'hidden'
        } sm:hidden top-0 left-0 w-full h-full bg-black z-50`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-20">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white hover:text-gray-400 text-xl"
                onClick={toggleMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
