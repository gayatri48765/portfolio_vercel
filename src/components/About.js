import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.png';
import TechStack from './TechStack';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden" id="about">
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 rounded-full blur-lg animate-pulse"></div>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 rounded-full opacity-20 blur-md"></div>
                <img 
                  src={profilePhoto} 
                  alt="Gayatri Mangire - Full Stack Developer" 
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 shadow-2xl" 
                />
              </div>
              
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500/30"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500/30"></div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-8"
            >
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
                  Gayatri Mangire
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 mx-auto mb-4"></div>
              <div className="space-y-2">
                <p className="text-emerald-300 text-xl font-semibold">Full-Stack Developer</p>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-400">M.S. Computer Science | 2.5+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent"></div>
                <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Professional Profile</span>
                <div className="w-8 h-px bg-gradient-to-l from-emerald-500 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-emerald-300 font-semibold">Full-Stack Developer</span> with a Master's in Computer Science from UT Dallas and 2.5+ years of experience building scalable web applications using <span className="text-emerald-300 font-medium">React.js, Node.js, Python, and .NET</span>.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently as a <span className="text-emerald-300 font-semibold">Software Developer at TraxID LLC</span>, I lead frontend architecture and full-stack development. My passion lies in creating <span className="text-emerald-300 font-medium">maintainable, high-performance applications</span> and collaborating effectively in Agile environments.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans the entire development lifecycle, from designing responsive UIs to building robust backend systems, implementing secure authentication, and optimizing application performance for production environments.
              </p>

              <motion.div 
                variants={itemVariants}
                className="mt-8 pt-8 border-t border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Technologies I Work With</h3>
                </div>
                <TechStack />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;