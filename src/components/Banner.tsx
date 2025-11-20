import React, { useState } from 'react';
import img from '../assets/img/3.jpg';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Import React icon for the close button

const EmailPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex relative rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl text-black hover:text-gray-300"
              onClick={closePopup}
            >
              <FaTimes />
            </button>

            {/* Popup Content */}
            <div className="flex w-full h-full">
              {/* Image on the left */}
              <div className="w-1/2">
                <img
                  src={img} // Replace with the actual image link
                  alt="Model"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Text and Call to Action Button on the right */}
              <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-sm font-bold text-gray-800">
                 Welcome to my Porfolio
                </h2>
                <p className="text-gray-600 mt-4 text-sm font-thin ">
                Hi, I'm <b>Damilola Vincent</b>, a passionate web developer and the creative mind behind Pawacode. I specialize in building visually stunning, responsive, and user-friendly websites that bring ideas to life. Let's turn your vision into reality! </p>
                <Link to="/projects">
                  <button className="mt-6 px-6 py-2 text-sm bg-black text-white hover:bg-white hover:border hover:text-black hover:border-black mb-3">
                   Check My Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPopup;
