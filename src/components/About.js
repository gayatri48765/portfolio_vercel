// components/About.js
import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/profile.png'
import TechStack from './TechStack';

function About() {
  const  aboutMe = '< About Me />'

  return (
    <section className="py-16 px-8 min-h-screen bg-black" id="about">

    <div className="flex flex-row-reverse max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center flex-1 text-center">
        <div className="profile-container">
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile" className="w-80 h-80 rounded-full bg-gray-600 mx-auto mb-4" />
          </div>
          <h2 className="text-white text-3xl mb-2">Gayatri Mangire</h2>
          <div className="w-12 h-0.5 bg-green-400 my-2 mx-auto"></div>
          <p className="text-gray-500 text-xl">Software Developer</p>
        </div>
      </div>
      <div className="pl-8 flex-1">
      <h1 className="text-white text-4xl mb-4">{aboutMe}</h1>

        <p className="text-primary-dark text-lg py-4">
          Hey! It's Gayatri Mangire, and I aspire to be a Fullstack Web Developer.
          With a diverse skill set encompassing frontend and backend programming,
          and proficiency in a range of tools and platforms, I bring hands-on experience
          as a Software Developer at Hummingbird Web Solutions Pvt, an e-commerce website
          using the MERN stack, and a Blog Application which showcase my expertise in building
          robust and scalable solutions.
        </p>
        <p className="text-primary-dark text-lg">
          Here are some technologies I'm familiar with:</p>
        <TechStack/>
      </div>
    </div>
  </section>
  

  );
}

export default About;
