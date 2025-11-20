import React from 'react';
import { motion } from 'framer-motion';
import designImage from '../assets/img/design.jpeg'; // Replace with the actual path to the Design image
import engineeringImage from '../assets/img/engr.jpeg'; // Replace with the actual path to the Engineering image

const PageComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        
        {/* Design Section */}
        <motion.div
          className="group flex flex-col items-center md:items-start space-y-4 p-1 bg-white dark:bg-[#2E1A47] rounded-md shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <motion.img
              src={designImage}
              alt="Design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold dark:text-[#fff] text-purple-500">
            Design
          </h2>
          <p className="dark:text-gray-300 text-sm px-6 text-gray-600">
            I’m a passionate designer with a keen eye for detail and a love for creating seamless, user-centric experiences...
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-purple-300 mb-2 rounded-full dark:bg-gray-300 animate-ping"
              ></div>
            ))}
          </div>
        </motion.div>
        
        {/* Engineering Section */}
        <motion.div
          className="group flex flex-col items-center md:items-start space-y-4 p-1 bg-white dark:bg-[#2E1A47] rounded-md shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <motion.img
              src={engineeringImage}
              alt="Engineering"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold text-purple-500 dark:text-[#fff]">
            Engineering
          </h2>
          <p className="dark:text-gray-300 text-sm text-gray-600 px-6">
            I’m a dedicated front-end engineer with a strong foundation in building interactive, responsive, and user-friendly web applications...
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 mb-2 border border-indigo-500 dark:border-gray-300 rounded-full"
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageComponent;
