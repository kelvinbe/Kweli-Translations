'use client';

import { motion } from 'framer-motion';
import React, {useState} from 'react'
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);


const toggleSidebar = () => {
  setIsOpen(!isOpen);
};

 return <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <img
        src="/kwel.jpeg"
        alt="search"
        className="sm:w-[155px] rounded-full  w-[100px] sm:h-[155px] h-[100px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] rounded-full leading-[30.24px] text-white">
     KTT
      </h2>
      <img
       onClick={toggleSidebar}
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <span className="absolute top-2 right-2 cursor-pointer" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <a href="/" className="block py-2">Home</a>
            <a href="/blog" className="block py-2">Blog</a>
            <a href="/about" className="block py-2">About Us</a>
          </div>
        </div>
      )}
  </motion.nav>
};

export default Navbar;
