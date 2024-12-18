import React, { memo, useState } from "react";
import Hamburger from "./Hamburger";

const Header = memo(({ isOpen, toggleOpen }) => {
  const NAV_LINKS = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Industries", href: "/industries" },
  ];

  // const containerRef = useRef(null);

  return (
    <header className="relative  py-[3.2rem] ml-0 lg:ml-40 mx-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between w-full">
          {/* logo */}
          <div className="flex px-2 md:justify-center items-center gap-4 lg:gap-16 md:gap-10">
            <div
              className="bg-[#3FDE8B] w-[48px] h-[48px] aspect-square"
              role="img"
            />
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                aria-label="Home"
                className="hidden md:block text-black font-medium text-xs md:text-sm tracking-[0px] leading-[15px]"
              >
                Web Development Company
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
          </div>
          <div className=" hidden px-0 items-end justify-end sm:flex sm:items-center gap-4 lg:gap-[2.7rem]">
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="py-3 px-1 text-xs text-black hover:text-gray-900 opacity-75 hover:opacity-100 tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a className="relative py-1 text-sm text-rojo/95 opacity-75 hover:opacity-100  tracking-tighter">
              Let's talk
              <span className="absolute -bottom-2 left-0 w-[54%] bg-rojo h-[2px]" />
            </a>
            <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
