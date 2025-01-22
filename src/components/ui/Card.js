import React from 'react';
import { HoverBorderGradient } from './HoverBoardGradient';

const Card = ({ imageUrl, heading, icon, tech, description }) => {
  return (
    <div className="flex bg-black rounded-lg overflow-hidden max-w-4xl shadow-[0_0_10px_rgba(255,255,255,0.3)]">
      {/* Left side - Photo */}
      <div className="w-1/3 h-full">
        <img src={imageUrl} alt="Card" className="w-full h-full object-contain" />
      </div>

      {/* Right side - Description */}
      <div className="w-2/3 p-6 text-white">
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
            // <button
            //   key={index}
            //   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            // >
            //   {button}
            // </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;


