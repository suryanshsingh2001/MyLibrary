import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-[#523f1b] text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="text-3xl font-semibold mb-2">
          Explore More Amazing Books!
        </div>
        <div className="text-lg text-gray-400 mb-4">
          Because reading is the ultimate adventure.
        </div>
        <div className="flex items-center space-x-2">
          <a href="https://github.com/suryanshsingh2001/MyLibrary/"
            target="_blank"
            rel="noopener noreferrer" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className=" relative">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              View Source Code
            </span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
              ></span>
          </a>
          {/* Add more social media or contact links as needed */}
        </div>
        <div className="mt-4">&copy; {new Date().getFullYear()} MyLibrary</div>
      </div>
    </footer>
  );
};

export default Footer;
