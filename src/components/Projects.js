import React from 'react';
import { motion } from 'framer-motion';

import { HoverBorderGradient } from './ui/HoverBoardGradient';
import musicImg from '../assets/music.png';
import potteryImg from '../assets/pottery.png';
import blogImg from '../assets/blog.png';

const ProjectCard = ({ imageUrl, heading, icon, tech, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-400/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
      
      <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 shadow-xl overflow-hidden">
        <div className="md:w-2/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
          <img 
            src={imageUrl} 
            alt={heading} 
            className="w-full h-48 md:h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent"></div>
        </div>

        <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Project
            </span>
          </div>

          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
              {heading}
            </h3>
            <div className="transform group-hover:scale-110 transition-transform">
              {React.cloneElement(icon, {
                className: icon.props.className + ' hover:text-emerald-400'
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem, idx) => (
              <div key={idx} className="relative group/tech">
                <div className="absolute -inset-0.5 bg-emerald-500/20 rounded-full blur opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                <span className="relative px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-emerald-300 text-sm font-medium backdrop-blur-sm">
                  {techItem}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          <div className="pt-4 border-t border-gray-800">
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Full-stack development</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const projects = [
    {
      imageUrl: musicImg,
      heading: 'Music Streaming Web App',
      icon: (
        <a 
          href='https://github.com/gayatri48765/Musik/tree/vOne' 
          target='_blank' 
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-emerald-400 transition-colors duration-300'
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
      ),
      tech: ['Django', 'React', 'MongoDB'],
      description: 'Developed a music streaming web app using Python Django for backend and integrated Spotipy to interact with the Spotify Web API for music data and user authentication. Implemented core features including search for artists/songs, playlist creation, and audio playback.',
    },
    {
      imageUrl: potteryImg,
      heading: 'Ecommerce Website - Pottery Works',
      icon: (
        <a 
          href='https://github.com/gayatri48765/Pottery/' 
          target='_blank' 
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-emerald-400 transition-colors duration-300'
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
      ),
      tech: ['NodeJs', 'React', 'MongoDB'],
      description: 'Developed an e-commerce website with the MERN stack, using React Router for navigation, Redux for state management and Axios for API requests. Implemented user authentication with JWT and building API endpoints for user registration, product listing, cart management, and order placement.',
    },
    {
      imageUrl: blogImg,
      heading: 'Blog Application',
      icon: (
        <a 
          href='https://github.com/gayatri48765/BlogHub/' 
          target='_blank' 
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-emerald-400 transition-colors duration-300'
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
      ),
      tech: ['NodeJS', 'React', 'MySQL'],
      description: 'Developed a full-stack blog website with React for the frontend, Node.js and Express for server-side operations, and SQL for efficient data management. Implemented CRUD functionality and used SCSS for streamlined styling and improved maintainability.',
    }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-28 px-4 md:px-8 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute top-1/4 left-5 w-48 h-48 bg-emerald-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-emerald-500/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Portfolio Showcase</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my technical implementations and problem-solving approaches
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              imageUrl={project.imageUrl}
              heading={project.heading}
              icon={project.icon}
              tech={project.tech}
              description={project.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-lg">
            <span className="text-emerald-400">🔗</span>
            <span className="text-gray-300 font-medium">
              View more on <a href="https://github.com/gayatri48765" className="text-emerald-300 hover:text-emerald-200 transition-colors">GitHub</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;