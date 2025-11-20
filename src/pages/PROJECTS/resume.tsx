import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaBriefcase, FaGraduationCap, FaTools, FaDownload, FaReact, FaPython, FaHtml5, FaDatabase, FaCode, FaUikit } from 'react-icons/fa';

import img from '../../assets/img/hero - Copy.png'
import cv from '../../assets/Damilola-Vincent_Cv-upd.pdf'
import Header from '../header';
import EmailPopup from '../../components/Banner';

const ResumeSection: React.FC = () => {
  // State to trigger animations once the component is mounted
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // After the component mounts, trigger the visibility state
    setIsVisible(true);
  }, []);

  return (
    <>
    <EmailPopup/>
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <div className="max-w-5xl mx-auto p-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white dark:bg-[#2E1A47] p-6 rounded shadow">
            {/* Profile Section */}
            <div className="flex items-center">
              <img
                src={img}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-thin dark:text-purple-400">Damilola Vincent</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Front-End Developer</p>
                <p className='flex m-3 gap-2 dark:text-purple-500'><FaReact/> <FaPython/> <FaHtml5/> <FaDatabase/> <FaTools/> </p>
                <p className="text-sm "> Passionate about responsive designs and user-friendly interfaces.</p>
              </div>
            </div>
            {/* Download Resume Button */}
            <div className="mt-4 md:mt-0">
              <a
                href={cv}
                download="Damilola_Vincent_Resume.pdf"
                className="flex items-center px-4 py-2 bg-purple-600 text-white  hover:bg-purple-500 shadow transition"
              >
                <FaDownload className="mr-2" />  Download Resume
              </a>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Me */}
            <div
              className={`bg-white dark:bg-[#2E1A47] p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaUserAlt className="text-xl text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-xl font-thin">About Me</h2>
              </div>
              <p className='text-sm font-thin'>
                Passionate responsive front-end web developer specializing in React, TypeScript, and UI/UX design. I bring
                cutting-edge designs and expertise in modern frameworks.
              </p>
            </div>

            {/* Expertise */}
            <div
              className={`bg-white dark:bg-[#2E1A47] p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaTools className="text-2xl text-green-600 dark:text-green-400 mr-3" />
                <h2 className="text-xl font-bold">Expertise</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaHtml5 className="mr-2 text-blue-600 dark:text-blue-400" /> HTML & CSS
                </li>
                <hr />
                <li className="flex items-center">
                  <FaReact className="mr-2 text-blue-600 dark:text-blue-400" /> React
                </li>
                <hr />
                <li className="flex items-center">
                  <FaCode className="mr-2 text-blue-600 dark:text-blue-400" /> JavaScript
                </li>
                <hr />
                <li className="flex items-center">
                  <FaPython className="mr-2 text-blue-600 dark:text-blue-400" /> Python
                </li>
                <hr />
                <li className="flex items-center">
                  <FaUikit className="mr-2 text-blue-600 dark:text-blue-400" /> UI/UX Design
                </li>
                <hr />
                <li className="flex items-center">
                  <FaCode className="mr-2 text-blue-600 dark:text-blue-400" /> TypeScript
                </li>
              </ul>
            </div>

            {/* Education */}
            <div
              className={`bg-white dark:bg-[#2E1A47] p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-2xl text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-xl font-thin">Education</h2>
              </div>
              <p className='text-sm mb-4'>
                <strong>2014-2018:</strong> BSc in Pharmacology, Olabisi Onabanjo University
              </p>
              <hr />
              <p className='mt-4 text-sm'>
                <strong>2024:</strong> JavaScript & Python, Web Development at Aptech Computer Training
              </p>
            </div>

            {/* Work Experience */}
            <div
              className={`bg-white dark:bg-[#2E1A47] p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-xl text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-xl font-thin">Work Experience</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li className='text-sm'>
                  <strong>2012:</strong> WordPress Web Developer
                </li>
                <hr />
                <li>
                  <strong>2020:</strong> Web Manager at NYSC GidIbest
                </li>
                <hr />
                <li>
                  <strong>2023:</strong> Sales Representative at Sterling Bank (Contract)
                </li>
                <hr />
                <li>
                  <strong>2024:</strong> Front-End Developer at Zilt Real Estate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
