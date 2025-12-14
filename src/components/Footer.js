import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 md:px-8 bg-gradient-to-t from-gray-950 to-transparent border-t border-gray-800 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-emerald-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm md:text-base">
              © {currentYear} | Gayatri Mangire.
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-sm">Built with</span>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-emerald-300 font-medium">React</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-emerald-300 font-medium">Tailwind CSS</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-emerald-300 font-medium">Vercel</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Thanks for visiting! Always open to interesting conversations and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;