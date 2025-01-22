import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <header className={`header ${isSticky ? 'sticky' : ''}`}>
    //   <div className="header-left">
    //   <div className='header-icon'></div>
    //     <h1 className="header-name">Gayatri Mangire  </h1>
    //     <span className="header-title">/ Software Developer</span>
    //   </div>
    //   <nav className="header-nav">
    //     <ul>
    //       <li><a href="#about">About</a></li>
    //       <li><a href="#tech-stack">Tech Stack</a></li>
    //       <li><a href="#experience">Experience</a></li>
    //       <li><a href="#projects">Projects</a></li>
    //       <li><a href="#contact">Contact</a></li>
    //     </ul>
    //   </nav>
    // </header>

    <header className={`flex justify-between items-center px-6 py-8 bg-black transition-all duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-xl' : ''}`}>
  <div className="flex items-center">
    <div className="w-5 h-5 bg-green-400 mr-4"></div>
    <h1 className="text-white text-xl font-bold mr-2">Gayatri Mangire</h1>
    <span className="text-gray-400 text-sm">/ Software Developer</span>
  </div>
  <nav>
    <ul className="flex space-x-6">
      <li><a href="#about" className="text-white hover:text-gray-400 text-base">About</a></li>
      {/* <li><a href="#tech-stack" className="text-white hover:text-gray-400 text-base">Tech Stack</a></li> */}
      <li><a href="#experience" className="text-white hover:text-gray-400 text-base">Experience</a></li>
      <li><a href="#projects" className="text-white hover:text-gray-400 text-base">Projects</a></li>
      <li><a href="#contact" className="text-white hover:text-gray-400 text-base">Contact</a></li>
    </ul>
  </nav>
</header>

  );
}

export default Header;
