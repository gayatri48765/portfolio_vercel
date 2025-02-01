import React from 'react';
import { HoverBorderGradient } from './ui/HoverBoardGradient';
import SocialLinks from './SocialLinks';


const ContactSection = () => {
  return (
    <section id='contact' className=" text-center sm:text-start px-8 pt-16 pb-40 rounded-lg justify-center shadow-md max-w-xl mx-auto">
      <h1 className="text-5xl text-primary-light font-bold text-center mb-6">Keep in touch</h1>
      <p className="text-md text-center text-primary-light">I'm currently looking <strong className='text-primary-main'>Full-Stack Development</strong> Role.</p>
      <p className="text-md text-center text-primary-light">Feel free to get in touch and talk more about opportunites.</p>

      <div className='justify-center pt-12 sm:pt-4 pb-12 sm:pb-48'>
      <SocialLinks justifyEvenly={false}></SocialLinks>
        </div>
    </section>
  );
};

export default ContactSection;
