// components/TechStack.js
import React from 'react';

function TechStack() {
    const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'GraphQL','jQuery', 'SCSS','Express.js','Java', 'Python','MySQL',' MongoDB',' Magento', 'AWS',];

  return (
    
    <div className="flex flex-wrap w-3/4 text-lg justify-start gap-4 my-4 p-4">
          {techStack.map((tech, index) => (
            <div>
        <span className='text-primary-main p-2'>➤</span>
              {tech}
            </div>
          ))}
        </div>
  );
}

export default TechStack;