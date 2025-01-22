import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/gayatri-mangire" target="_blank" rel="noopener noreferrer" className="text-2xl  hover:text-primary-dark text-gray-800">
      <i class="fa-brands fa-linkedin fa-2xl"></i>
      </a>
      <a href="mailto:gayatrim22.gm@gmail.com" className="text-2xl text-gray-800 hover:text-primary-dark">
      <i class="fa-solid fa-envelope fa-2xl"></i>
      </a>
      <a href="https://github.com/gayatri48765" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-primary-dark">
      <i class="fa-brands fa-github fa-2xl"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
