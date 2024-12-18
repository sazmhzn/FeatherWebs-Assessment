import React, { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import Hamburger from "./Hamburger";

const Header = ({ isOpen, toggleOpen }) => {
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Industries", href: "/industries" },
    // { label: "Let's Talk", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const containerRef = useRef(null);

  return (
    <header className="relative  py-[3.2rem] lg:ml-40 mx-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between w-full">
          {/* logo */}
          <div className="flex px-2 md:justify-center items-center gap-4 lg:gap-14 md:gap-10">
            <div className="bg-[#3FDE8B] w-[48px] aspect-square" />
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="hidden md:block text-black font-medium text-xs md:text-sm tracking-[0px] leading-[15px]"
              >
                Web Development Company
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
            </button>
          </div>
          <div className="hidden px-4 items-end justify-end sm:flex sm:items-center gap-4 lg:gap-[3.2rem]">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="py-3 text-xs text-black hover:text-gray-900 opacity-75 hover:opacity-100 hover:border-b border-rojo tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a className="relative py-2 text-sm text-rojo hover:text-gray-900 opacity-75 hover:opacity-100  border-rojo tracking-tighter">
              Let's talk
              <span className="absolute -bottom-2 left-0 w-2/3 bg-rojo h-[2px]" />
            </a>
            <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
