import React, {useState} from 'react';
import Card from './ui/Card';
import musicImg from '../assets/music.png'
import potteryImg from '../assets/pottery.png'
import blogImg from '../assets/blog.png'

// import FontAwesomeIcon from 

function Projects() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // Array of projects
  const projects = [
    {
      imageUrl: musicImg,
      heading: 'Music Streaming Web App',
      icon: <a href='https://github.com/gayatri48765/Musik/tree/vOne'><i class="fa-brands fa-github fa-2x"></i></a>,
      tech: ['Django', 'React', 'MongoDb'],
      description:
        'Developed a music streaming web app using Python Django for backend and integrated Spotipy to interact with the Spotify Web API for music data and user authentication. Implemented core features including search for artists/songs, playlist creation, and audio playback.',
    },
    {
      imageUrl: potteryImg,
      heading: 'Ecommerce Website - Pottery Works',
      icon: <a href='https://github.com/gayatri48765/Pottery/'> <i class="fa-brands fa-github fa-2x"></i></a>,
      tech: ['NodeJs', 'Spotipy','React', 'MongoDb'],
      description:
        'Developed an e-commerce website with the MERN stack, using React Router for navigation, Redux for state management and Axios for API requests.Implemented user authentication with JWT and building API endpoints for user registration, product listing, cart management, and order placement.',
    },
    {
      imageUrl: blogImg,
      heading: 'Blog Application',
      icon:  <a href='https://github.com/gayatri48765/BlogHub/'><i class="fa-brands fa-github fa-2x"></i></a>,
      tech: ['NodeJS', 'React', 'MySql'],
      description:
        'Developed a full-stack blog website with React for the frontend, Node.js and Express for server-side operations, and SQL for efficient data management. Implemented CRUD functionality and used SCSS for streamlined styling and improved maintainability.',
    }
  ];

  return (
    <section id="projects" className="text-center sm:text-start py-16 px-8 min-h-screen">
      <h2 className="sm:px-8 text-white text-4xl mb-16 xs:mb-8">{"< Projects />"}</h2>

      {/* Accordion for screens up to 480px */}
<div className="block xs:hidden">
  {projects.map((project, index) => (
    <div key={index} className="mb-4 border border-gray-700 rounded-lg">
      <button
        className="w-full text-left px-4 py-2 bg-gray-800 text-white flex justify-between items-center"
        onClick={() => toggleAccordion(index)}
      >
        <span>{project.heading}</span>
        <span>{activeIndex === index ? '-' : '+'}</span>
      </button>
      {activeIndex === index && (
        <div className="px-4 py-2 bg-gray-900 text-gray-300">
          <div className="mb-2">
            <img src={project.imageUrl} alt={project.heading} className="w-full rounded-lg" />
          </div>
          <p className="mb-2">{project.description}</p>
          <div className="mb-2">
            <strong>Tech Stack:</strong> {project.tech.join(', ')}
          </div>
          <div>{project.icon}</div>
        </div>
      )}
    </div>
  ))}
</div>

      <div className="hidden xs:grid sm:grid-row-1 justify-center py-12 gap-8">
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
    </section>
  );
}

export default Projects;
