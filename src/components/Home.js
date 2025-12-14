import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

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

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 md:px-8 py-0 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between w-full gap-12"
        >
          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.p 
              custom={0}
              variants={textVariants}
              className="text-emerald-400 text-xl md:text-2xl lg:text-3xl mb-2 font-medium"
            >
              Hey there! I'm
            </motion.p>
            
            <motion.h1 
              custom={1}
              variants={textVariants}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Gayatri Mangire
              </span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              variants={textVariants}
              className="max-w-2xl text-gray-300 text-lg md:text-xl mb-6 leading-relaxed"
            >
              A passionate <span className="text-emerald-300 font-semibold">Full-Stack Developer</span> with 2.5+ years of experience, 
              crafting scalable web applications with modern technologies. 
              Holding a <span className="text-emerald-300 font-semibold">Master's in Computer Science</span>, currently building 
              innovative solutions as a <span className="text-emerald-300 font-semibold">Software Developer</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              custom={4}
              variants={textVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white font-semibold hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div 
            custom={5}
            variants={textVariants}
            className="lg:self-end lg:pb-16"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-lg"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
                <p className="text-emerald-300 text-sm font-semibold mb-4 text-center">Connect with me</p>
                <div className="mb-4">
                  <SocialLinks />
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></div>
                    <span className="text-gray-300 text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-emerald-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;