import React from 'react';
import SocialLinks from './SocialLinks';

function Home() {
  const name = "< Gayatri Mangire />";
  return (
    <section
      id="home"
      className="text-center sm:text-start flex flex-col sm:flex-row items-center justify-center min-h-screen bg-black px-8 py-0"
    >
      <div className="w-3/4 justify-start">
        <p className="text-primary-main text-xl xs:text-3xl mb-2">Hey there! I'm</p>
        <h1 className="text-white text-3xl xs:text-4xl lg:text-6xl md:text-5xl font-bold mb-4">{name}</h1>
        <p className=" max-w-lg text-gray-400 text-xs xs:text-base xs:text-lg sm:text-xl mb-4">
        I'm a <strong className='text-primary-main'>Frontend Developer | Aspiring Full-Stack Innovator</strong>, focused on building 
										seamless Web applications. My passion lies in developing optimized and efficient web solutions.
        </p>
        <p className="text-white text-lg xs:text-xl mb-2">
          Currently Pursuing MS in Computer Science at UT Dallas.
        </p>
        <p className="text-gray-400 text-lg xs:text-xl">Software Developer Intern at TraxID LLC</p>
      </div>
      <div className='self-end pt-12 sm:pt-0 pb-12 sm:pb-48'>
        <SocialLinks justifyEvenly={true}/>
      </div>
    </section>
  );
}

export default Home;
