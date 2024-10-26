// import React from "react";
// 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import "../index.css";

// const Footer = () => {
//   return (
//     <footer className="bg-[#523f1b] text-white py-6 mt-auto">
//       <div className="container mx-auto flex flex-col items-center justify-center text-center">
//         <div className="text-3xl font-semibold mb-2">
//           Explore More Amazing Books!
//         </div>
//         <div className="text-lg text-gray-400 mb-4">
//           Because reading is the ultimate adventure.
//         </div>
//         <div className="flex items-center space-x-2">
//           <a href="https://github.com/suryanshsingh2001/MyLibrary/"
//             target="_blank"
//             rel="noopener noreferrer" className="relative inline-block text-lg group">
//             <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span className=" relative">
//               <FontAwesomeIcon icon={faGithub} className="mr-2" />
//               View Source Code
//             </span>
//             </span>
//             <span
//               className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//               data-rounded="rounded-lg"
//               ></span>
//           </a>
//           {/* Add more social media or contact links as needed */}
//         </div>
//         <div className="mt-4">&copy; {new Date().getFullYear()} MyLibrary</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';

// import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#443c2c] text-gray-300 px-8 py-12">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <p className="mb-6">Discover a world of knowledge through our extensive collection of books and resources.</p>
//             <div className="flex gap-4">
//               <Phone className="w-5 h-5" />
//               <Mail className="w-5 h-5" />
//               <MapPin className="w-5 h-5" />
//             </div>
//           </div>

//           {/* Reader Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Reader Services</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-white">My Account</a></li>
//               <li><a href="#" className="hover:text-white">Reading Lists</a></li>
//               <li><a href="#" className="hover:text-white">Book Reservations</a></li>
//               <li><a href="#" className="hover:text-white">Library Card</a></li>
//               <li><a href="#" className="hover:text-white">Reading History</a></li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-white">E-Books</a></li>
//               <li><a href="#" className="hover:text-white">Audiobooks</a></li>
//               <li><a href="#" className="hover:text-white">Digital Magazines</a></li>
//               <li><a href="#" className="hover:text-white">Research Tools</a></li>
//               <li><a href="#" className="hover:text-white">Academic Journals</a></li>
//             </ul>
//           </div>

//           {/* Information and Newsletter */}
//           <div>
//             <div className="mb-8">
//               <h3 className="text-white font-semibold mb-4">Information</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">About Us</a></li>
//                 <li><a href="#" className="hover:text-white">Library Hours</a></li>
//                 <li><a href="#" className="hover:text-white">Membership</a></li>
//                 <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white">Terms of Service</a></li>
//               </ul>
//             </div>
            
//             <div className="mb-8">
//               <h3 className="text-white font-semibold mb-4">Newsletter</h3>
//               <p className="mb-4">Subscribe to receive updates about new books and events.</p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-[#554b37] px-4 py-2 rounded-l outline-none flex-grow"
//                 />
//                 <button className="bg-[#665c47] px-4 py-2 rounded-r">
//                   <svg
//                     className="w-5 h-5 rotate-90"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-white font-semibold mb-4">Follow Us</h3>
//               <div className="flex gap-4">
//                 <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
//                 <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
//                 <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
//                 <Github className="w-5 h-5 hover:text-white cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-600">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p>© 2024 MyLibrary. All rights reserved.</p>
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms of Service</a>
//             <a href="#" className="hover:text-white">Cookie Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#443c2c] text-gray-300 px-8 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <p className="mb-6">Discover a world of knowledge through our extensive collection of books and resources.</p>
            <div className="flex gap-4">
              {/* Phone Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {/* Mail Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              {/* Location Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
          </div>

          {/* Reader Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Reader Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Reading Lists</a></li>
              <li><a href="#" className="hover:text-white">Book Reservations</a></li>
              <li><a href="#" className="hover:text-white">Library Card</a></li>
              <li><a href="#" className="hover:text-white">Reading History</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">E-Books</a></li>
              <li><a href="#" className="hover:text-white">Audiobooks</a></li>
              <li><a href="#" className="hover:text-white">Digital Magazines</a></li>
              <li><a href="#" className="hover:text-white">Research Tools</a></li>
              <li><a href="#" className="hover:text-white">Academic Journals</a></li>
            </ul>
          </div>

          {/* Information and Newsletter */}
          <div>
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Library Hours</a></li>
                <li><a href="#" className="hover:text-white">Membership</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to receive updates about new books and events.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#554b37] px-4 py-2 rounded-l outline-none flex-grow"
                />
                <button className="bg-[#665c47] px-4 py-2 rounded-r">
                  <svg className="w-5 h-5 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Facebook Icon */}
                <svg className="w-5 h-5 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                {/* Twitter Icon */}
                <svg className="w-5 h-5 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
                {/* LinkedIn Icon */}
                <svg className="w-5 h-5 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                {/* GitHub Icon */}
                <svg className="w-5 h-5 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 MyLibrary. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;