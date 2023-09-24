import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="text-3xl font-semibold mb-2">
          Explore More Amazing Books!
        </div>
        <div className="text-lg text-gray-400 mb-4">
          Because reading is the ultimate adventure.
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/suryanshsingh2001/MyLibrary/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View Source Code
          </a>
          {/* Add more social media or contact links as needed */}
        </div>
        <div className="mt-4">
          &copy; {new Date().getFullYear()} MyLibrary
        </div>
      </div>
    </footer>
  );
};

export default Footer;
