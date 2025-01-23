// components/Experience.js
import React from 'react';
import { GlowEffect } from './ui/GlowEffect';
import ExpAccordion from './ExpAccordion';

// Description Component
export const Description = ({ points }) => (
  <ul className="space-y-2">
    {points.map((point, index) => (
      <div className='flex'>
        <span className='pr-2'>➤</span>
        <li key={index} className="text-sm text-gray-300 dark:text-gray-700">
          {point}
        </li>
      </div>
      
    ))}
  </ul>
);



const TimelineItem = ({ date, title, company, description }) => (
  <div className="flex gap-8 mb-8">
    {/* Date section on the left */}
    <div className=" w-32 text-right">
      <span className="text-gray-600 font-medium">{date}</span>
    </div>
    
    {/* Timeline line and dot */}
    <div className="relative flex flex-col items-center">
      <div className="h-full w-px bg-gray-100"></div>
      <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-200"></div>
    </div>
    
    {/* Content card on the right */}
    <div className=' relative'>
      <GlowEffect
        colors={['#3CCF91', '#3CCF91', '#3CCF91', '#3CCF91']}
        mode='static'
        blur='soft'
      />
      <div className='relative w-full rounded-lg bg-black p-4 text-white dark:bg-white dark:text-black'>
        <h1 className='text-2xl'>{title}</h1>
        <h2 className='text-md pb-4'>{company}</h2>
        
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
      title: "Software Developer Intern",
      company: "TraxID LLC",
      description: ['Developed responsive UIs with React.js and Material-UI, optimizing performance and ensuring design consistency',
      'Implemented new features, integrated REST APIs, maintained code quality through Git and code reviews, and increased sprint completion rate by 10%',
      'Collaborated with a team to refactor 30% of the codebase, improving maintainability and reducing technical debt.']
    },
    {
      date: "2022 - 2023",
      title: "Software Developer",
      company: "Hummingbird Web Solution Pvt. Ltd.",
      description: [
        "Collaborated on Magento Ecommerce Themes (Hyva, ScandiPWA), translating designs into responsive web pages using HTML, CSS, React, and Alpine JS.",
        "Enhanced frontend code to meet SEO and accessibility standards across multiple development teams.",
        "Conducted performance assessments with Google Pagespeed Insights, achieving a 27% improvement in website performance."
      ]
      
    },
    {
      date: "2021 - 2021",
      title: "Cloud Computing Course",
      company: "LinuxWorld Pvt. Ltd.",
      description: [
        "Completed a cloud computing training program, focusing on multiple cloud platforms, Terraform for Infrastructure as Code (IaC), and Kubernetes for container orchestration.",
        "Gained hands-on experience provisioning a Virtual Private Cloud (VPC) on AWS using Terraform, including public and private subnets for secure resource management.",
        "Automated the deployment of a web server with Elastic File System (EFS) on AWS, ensuring high availability and scalability of the infrastructure."
      ]
      
    }
  ];

  return (
      <section id="experience" className='text-center  sm:text-start px-8 py-16 min-h-screen'>
      <h2 className="sm:px-8 text-white text-4xl mb-8">{workExperience}</h2>
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="hidden xs:block relative">
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
      <div className="block xs:hidden space-y-4">
    {experiences.map((item, index) => (
      <ExpAccordion
        key={index}
        date={item.date}
        title={item.title}
        company={item.company}
        description={item.description}
      />
    ))}
  </div>
    </div>

    
      
    
    </section>
    
  );

  
}

export default Experience;



