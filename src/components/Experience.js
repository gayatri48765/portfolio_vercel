import React from 'react';
import { motion } from 'framer-motion';

const Description = ({ points }) => (
  <ul className="space-y-3">
    {points.map((point, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-start group"
      >
        <div className="pr-3 pt-1 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 group-hover:bg-emerald-400 transition-colors"></div>
        </div>
        <li className="text-sm text-gray-300 group-hover:text-white transition-colors leading-relaxed">
          {point}
        </li>
      </motion.div>
    ))}
  </ul>
);

const TimelineItem = ({ date, title, company, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex gap-6 md:gap-8 mb-10 group"
  >
    <div className="hidden md:block w-28 md:w-36 flex-shrink-0">
      <div className="relative">
        <span className="relative block px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-emerald-300 font-medium text-sm md:text-base text-center">
          {date}
        </span>
      </div>
    </div>
    
    <div className="relative flex flex-col items-center flex-shrink-0">
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-6 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-400/30 to-transparent origin-top"
      ></motion.div>
      <div className="relative z-10">
        <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-gray-900 mt-2 shadow-sm"></div>
      </div>
    </div>
    
    <div className='relative flex-1 min-w-0 transform transition-transform duration-300 group-hover:-translate-y-0.5'>
      <div className='relative w-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 p-6 md:p-7 text-white border border-gray-800 shadow-lg overflow-hidden'>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              Experience
            </span>
          </div>
          
          <h1 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            {title}
          </h1>
          
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <h2 className='text-lg md:text-xl font-semibold text-emerald-200'>{company}</h2>
          </div>
          
          <Description points={description} />
          
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-500/40 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

function Experience() {
  const experiences = [
    {
      date: "2024 - Present",
      title: "Software Developer",
      company: "TraxID LLC",
      description: ['Led Front-end architecture and development of a work order management app from the ground up in React (TypeScript) with Material-UI. Accelerated development by 20% by creating a reusable component library for dynamic form builder with Formik and a custom JSON validator.',
      'Developed 30+ REST API endpoints using .NET Web API, seamlessly integrating them with the frontend. Implemented secure JWT and OAuth authentication.',
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
      company: "Datametica Pvt. Ltd.",
      description: [
        "Assisted in optimizing database operations and queries for a fintech data aggregation service, which improved data retrieval efficiency.",
        "Contributed to the development and maintenance of internal APIs using Node.js and Express.",
        "Participated in testing and debugging API endpoints using Postman, ensuring accurate and timely data delivery.."
      ]
    }
  ];

  return (
    <section id="experience" className='relative px-4 md:px-8 py-20 md:py-28 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950'>
      <div className="absolute top-20 left-10 w-48 h-48 bg-emerald-500/3 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500/2 rounded-full blur-2xl opacity-50"></div>
      
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
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Career Journey</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of professional growth and technical contributions
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-[4.5rem] md:left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"></div>
          
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              date={experience.date}
              title={experience.title}
              company={experience.company}
              description={experience.description}
              index={index}
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/80 border border-gray-700">
            <span className="text-emerald-400">📈</span>
            <span className="text-gray-300 font-medium">Continuously growing and learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;