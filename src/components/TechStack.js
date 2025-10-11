// components/TechStack.js
import React from 'react';

function TechStack() {
  const techStack = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
    'Python', 'C#', 'Java', 'HTML/CSS', 'Tailwind CSS', 'SCSS',
    'GraphQL', 'REST APIs', 'MySQL', 'MongoDB', 'AWS', 'GCP',
    'Git', 'GitHub', 'Jira', 'ASP.NET', 'Django', 'jQuery'
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {techStack.map((tech, index) => (
        <div key={index} className="flex items-center text-gray-300">
          <span className='text-green-400 mr-2 text-sm'>➤</span>
          <span className="text-sm lg:text-base">{tech}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;