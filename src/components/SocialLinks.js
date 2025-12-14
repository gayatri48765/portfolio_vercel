import React from 'react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a 
        href="https://www.linkedin.com/in/gayatri-mangire" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative"
      >
        <div className="absolute -ins-1 bg-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-all duration-300">
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </div>
      </a>
      
      <a 
        href="mailto:gayatrim22.gm@gmail.com" 
        className="group relative"
      >
        <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-all duration-300">
          <i className="fa-solid fa-envelope fa-lg"></i>
        </div>
      </a>
      
      <a 
        href="https://github.com/gayatri48765" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative"
      >
        <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-all duration-300">
          <i className="fa-brands fa-github fa-lg"></i>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;