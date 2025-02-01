import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

const SocialLinks = ({justifyEvenly}) => {
  return (
    <div className={`flex ${justifyEvenly ? 'justify-evenly' : 'justify-center'} space-x-4`}>
      <a href="https://www.linkedin.com/in/gayatri-mangire" target="_blank" rel="noopener noreferrer" className="text-2xl  hover:text-primary-dark text-gray-800">
      <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>
      <a href="mailto:gayatrim22.gm@gmail.com" className="text-2xl text-gray-800 hover:text-primary-dark">
      <i className="fa-solid fa-envelope fa-xl "></i>
      </a>
      <a href="https://github.com/gayatri48765" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-primary-dark">
      <i className="fa-brands fa-github fa-xl "></i>
      </a>
    </div>
  );
};

export default SocialLinks;
