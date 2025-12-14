import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  return (
    <section id='contact' className="relative py-20 md:py-28 px-4 md:px-8 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 border border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-emerald-300 text-sm font-medium">Open to Opportunities</span>
                  </div>
                  
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                    I'm currently exploring <span className="text-emerald-300 font-semibold">Full-Stack Development</span> roles where I can contribute to impactful projects and grow professionally.
                  </p>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Feel free to reach out if you'd like to discuss opportunities, collaborate on projects, or just connect!
                  </p>
                </div>

                <div className="mb-12">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    <a 
                      href="mailto:gayatrim22.gm@gmail.com" 
                      className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">gayatrim22.gm@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://drive.google.com/file/d/18-LOqfSvy1HxFiCuaVPUiI05IKt0ghGC/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                    >
                      View Resume
                    </a>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-emerald-300 text-lg font-semibold mb-6">Connect with me</p>
                  <div className="flex justify-center">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <SocialLinks />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Based in Dallas, TX | Open to Remote & Hybrid</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;