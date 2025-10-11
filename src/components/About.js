// components/About.js
import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/profile.png'
import TechStack from './TechStack';

function About() {
  const aboutMe = '< About Me />'

  return (
    <section className="py-16 px-4 md:px-8 min-h-screen bg-black" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
          {/* Profile Section */}
          <div className="flex flex-col justify-center items-center flex-1 text-center">
            <div className="profile-container">
              <div className="profile-photo">
                <img 
                  src={profilePhoto} 
                  alt="Gayatri Mangire - Full Stack Developer" 
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gray-600 mx-auto mb-6 border-4 border-green-400" 
                />
              </div>
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2">Gayatri Mangire</h2>
              <div className="w-12 h-0.5 bg-green-400 my-2 mx-auto"></div>
              <p className="text-gray-300 text-lg lg:text-xl font-medium">Full Stack Developer</p>
              <p className="text-gray-400 text-sm mt-2">M.S. Computer Science | 2.5+ Years Experience</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-white text-3xl lg:text-4xl font-bold mb-6">{aboutMe}</h1>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Results-driven <span className="text-green-400 font-semibold">Full Stack Developer</span> with a Master's in Computer Science from University of Texas at Dallas and 2.5 years of professional experience building scalable web applications using React.js, Node.js, Python, and C#.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently working as a <span className="text-green-400 font-semibold">Software Developer at TraxID LLC</span>, where I lead frontend architecture and full-stack development. Passionate about building maintainable web applications, optimizing performance, and collaborating effectively in Agile teams.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans both frontend and backend development, with proven experience in developing REST APIs, implementing secure authentication systems, and optimizing application performance across multiple production applications.
              </p>

              <div className="mt-6">
                <p className="text-gray-300 text-lg font-semibold mb-4">
                  Here are some technologies I'm familiar with:
                </p>
                <TechStack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;