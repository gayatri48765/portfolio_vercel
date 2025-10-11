import React from 'react';
import Card from './ui/Card';
import musicImg from '../assets/music.png';
import potteryImg from '../assets/pottery.png';
import blogImg from '../assets/blog.png';

function Projects() {
  // Array of projects
  const projects = [
    {
      imageUrl: musicImg,
      heading: 'Music Streaming Web App',
      icon: (
        <a 
          href='https://github.com/gayatri48765/Musik/tree/vOne' 
          target='_blank' 
          rel='noopener noreferrer'
          className='hover:text-green-400 transition-colors duration-200'
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      ),
      tech: ['Django', 'React', 'MongoDB'],
      description:
        'Developed a music streaming web app using Python Django for backend and integrated Spotipy to interact with the Spotify Web API for music data and user authentication. Implemented core features including search for artists/songs, playlist creation, and audio playback.',
    },
    {
      imageUrl: potteryImg,
      heading: 'Ecommerce Website - Pottery Works',
      icon: (
        <a 
          href='https://github.com/gayatri48765/Pottery/' 
          target='_blank' 
          rel='noopener noreferrer'
          className='hover:text-green-400 transition-colors duration-200'
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      ),
      tech: ['NodeJs', 'React', 'MongoDB'],
      description:
        'Developed an e-commerce website with the MERN stack, using React Router for navigation, Redux for state management and Axios for API requests. Implemented user authentication with JWT and building API endpoints for user registration, product listing, cart management, and order placement.',
    },
    {
      imageUrl: blogImg,
      heading: 'Blog Application',
      icon: (
        <a 
          href='https://github.com/gayatri48765/BlogHub/' 
          target='_blank' 
          rel='noopener noreferrer'
          className='hover:text-green-400 transition-colors duration-200'
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      ),
      tech: ['NodeJS', 'React', 'MySQL'],
      description:
        'Developed a full-stack blog website with React for the frontend, Node.js and Express for server-side operations, and SQL for efficient data management. Implemented CRUD functionality and used SCSS for streamlined styling and improved maintainability.',
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 md:mb-12">{"< Projects />"}</h2>
        <div className="grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              heading={project.heading}
              icon={project.icon}
              tech={project.tech}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;