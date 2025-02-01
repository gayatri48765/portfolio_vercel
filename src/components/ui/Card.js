import React from 'react';
import { HoverBorderGradient } from './HoverBoardGradient';

const Card = ({ imageUrl, heading, icon, tech, description }) => {
  return (
    <div className="flex flex-col p-4 sm:flex-row bg-black rounded-lg overflow-hidden max-w-4xl shadow-[0_0_10px_rgba(60,207,145,0.5)]">
      {/* Left side - Photo */}
      <div className="sm:w-2/5 h-full">
        <img src={imageUrl} alt="Card" className="w-full h-full object-contain" />
      </div>

      {/* Right side - Description */}
      <div className="sm:w-3/5 p-6 text-white">
        {/* Heading and Icon */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <span className="text-gray-300">{icon}</span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-4">
          {tech.map((tech, index) => (
            <HoverBorderGradient
            key={index}
            containerClassName="rounded-md"
            className="px-2 py-1 text-sm text-center"
          >
            {tech}
          </HoverBorderGradient>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;


