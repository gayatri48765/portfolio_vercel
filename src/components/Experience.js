// components/Experience.js
import React from 'react';
import { GlowEffect } from './ui/GlowEffect';

// Description Component
const Description = ({ points }) => (
  <ul className="space-y-2">
    {points.map((point, index) => (
      <div key={index} className='flex items-start'>
        <span className='pr-2 pt-0.5 flex-shrink-0 text-white'>➤</span>
        <li className="text-sm text-white">
          {point}
        </li>
      </div>
    ))}
  </ul>
);

const TimelineItem = ({ date, title, company, description }) => (
  <div className="flex gap-6 md:gap-8 mb-8">
    {/* Date section on the left */}
    <div className="w-28 md:w-32 flex-shrink-0">
      <span className="text-gray-300 font-medium text-sm md:text-base">{date}</span>
    </div>
    
    {/* Timeline line and dot */}
    <div className="relative flex flex-col items-center flex-shrink-0">
      <div className="absolute top-4 bottom-0 w-0.5 bg-gray-600"></div>
      <div className="relative z-10 w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-800 mt-1"></div>
    </div>
    
    {/* Content card on the right */}
    <div className='relative flex-1 min-w-0'>
      <GlowEffect
        colors={['#3CCF91', '#3CCF91', '#3CCF91', '#3CCF91']}
        mode='static'
        blur='soft'
      />
      <div className='relative w-full rounded-lg bg-gray-800 p-4 md:p-6 text-white'>
        <h1 className='text-xl md:text-2xl font-semibold text-white'>{title}</h1>
        <h2 className='text-md md:text-lg text-gray-200 pb-3 md:pb-4'>{company}</h2>
        
        <Description points={description} />
      </div>
    </div>
  </div>
);

function Experience() {
  const workExperience = '< Work Experience />'
  const experiences = [
    {
      date: "2024 - Present",
      title: "Software Developer",
      company: "TraxID LLC",
      description: ['Led Front-end architecture and development of a work order management app from the ground up in React (TypeScript) with Material-UI. Accelerated development by 20% by creating a reusable component library for dynamic form builder with Formik and a custom JSON validator.',
      'Developed 10+ REST API endpoints using .NET Web API, seamlessly integrating them with the frontend. Implemented secure JWT and OAuth authentication.',
      'Increased team efficiency by optimizing git workflow and refactored 30% of code base through code reviews to boost code quality reducing technical debt and streamlined React-C# integration. Contributed to feature development and maintenance tasks across 3+ web applications, including a legacy system built on .NET Web Forms.']
    },
    {
      date: "2022 - 2023",
      title: "Software Developer",
      company: "Hummingbird Web Solution Pvt. Ltd.",
      description: [
        "Developed and maintained responsive user interfaces for multiple client websites using React.js, translating complex design mockups into high-quality, functional code.",
        "Engineered performance-critical React components, optimizing Core Web Vitals to achieve LCP under 1.2s and implementing SEO-friendly practices, which resulted in a 20% improvement in search rankings.",
        "Boosted overall website performance by 27% by conducting systematic audits with Google PageSpeed Insights and refactoring React code to eliminate rendering bottlenecks and inefficient processes." 
      ]
    },
    {
      date: "2021 - 2021",
      title: "Software Developer Intern",
      company: "LinuxWorld Pvt. Ltd.",
      description: [
        "Assisted in developing RESTful APIs with Node.js and Express.js, including implementing user authentication, contributing to the improvement of internal tools under the guidance of senior developers.",
        "Collaborated with the team to optimize database operations, resulting in a 20% faster response time in queries by integrating MongoDB for efficient data storage and retrieval.",
        "Validated and debugged 15+ API endpoints using Postman to ensure seamless integration and robust system interoperability."
      ]
    }
  ];

  return (
    <section id="experience" className='px-4 md:px-8 py-16 min-h-screen'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 md:mb-12">{workExperience}</h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              date={experience.date}
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;