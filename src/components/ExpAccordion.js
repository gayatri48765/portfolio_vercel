import React, { useState } from 'react';
import { GlowEffect } from './ui/GlowEffect';
import { Description } from './Experience';

const ExpAccordion = ({ date, title, company, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div 
        className="flex items-center justify-between p-4 bg-gray-800 rounded-t-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        <div>
          <h1 className="text-lg text-white">{title}</h1>
          <h2 className="text-sm text-gray-400">{company}</h2>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-400">{date}</span>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-white`}></i>
        </div>
      </div>

      {isOpen && (
        <div className="relative">
          <GlowEffect
            colors={['#3CCF91', '#3CCF91', '#3CCF91', '#3CCF91']}
            mode='static'
            blur='soft'
          />
          <div className='relative w-full rounded-b-lg bg-black p-4 text-white dark:bg-white dark:text-black'>
            <Description points={description} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpAccordion;
