import React from 'react';
import SocialLinks from './SocialLinks';

function Home() {
  const name = "< Gayatri Mangire />";
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-black px-4 md:px-8 py-0"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Main Content */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <p className="text-green-400 text-xl md:text-2xl lg:text-3xl mb-2">Hey there! I'm</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6">{name}</h1>
          <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
            I'm a <strong className='text-green-400'>Full-Stack Developer</strong> with 2.5+ years of experience, 
            focused on building scalable and efficient web applications. 
            With a <strong className='text-green-400'>Master's degree in Computer Science</strong>, I currently work as a{" "}
            <strong className='text-green-400'>Software Developer at TraxID LLC</strong>.
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-white text-lg md:text-xl">
              Building full-stack applications with <strong className='text-green-400'>React, .NET, and Cloud technologies</strong>
            </p>
            <p className="text-gray-400 text-lg">
              Passionate about creating optimized and maintainable web solutions
            </p>
          </div>
        </div>

        <div className='lg:self-end lg:pb-16 mt-8 lg:mt-0'>
          <SocialLinks/>
        </div>
      </div>
    </section>
  );
}

export default Home;