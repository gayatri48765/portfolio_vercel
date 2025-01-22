import React from 'react';
import { HoverBorderGradient } from './ui/HoverBoardGradient';
const ContactSection = () => {
  return (
    <section id='contact' className=" px-8 pt-16 pb-40 rounded-lg justify-center shadow-md max-w-xl mx-auto">
      <h1 className="text-5xl text-primary-light font-bold text-center mb-6">Keep in touch</h1>
      <p className="text-md text-center text-primary-light">I'm currently looking <strong className='text-primary-main'>Full-Stack Development</strong> Role.</p>
      <p className="text-md text-center text-primary-light">Feel free to get in touch and talk more about opportunites.</p>

      <div className="flex justify-evenly mt-8 w-3/4 m-auto">
        <a href="https://www.linkedin.com/in/gayatri-mangire"  className=" text-white py-2 mt-0 transition duration-300">
        <HoverBorderGradient
              containerClassName="rounded-md"
              className="px-4 py-1 text-lg text-center"
            >
              LinkedIn
            </HoverBorderGradient>
        </a>
        <a href="mailto:gayatrim22.gm@gmail.com" className=" text-primary-light py-2 px-6 mt-0 transition duration-300">
        <HoverBorderGradient
              containerClassName="rounded-md"
              className="px-4 py-1 text-lg text-center"
            >
              Gmail
            </HoverBorderGradient>
        </a>
        <a href='https://drive.google.com/file/d/1rWy5W7ovqXZJELzfEcFBuYw819a2yFlN/view' className=" text-primary-light py-2 px-4  mt-0 transition duration-300">
        <HoverBorderGradient
              containerClassName="rounded-md"
              className="px-4 py-1 text-lg  text-center"
            >
              Resume
            </HoverBorderGradient>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
