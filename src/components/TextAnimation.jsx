import React, { useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ link, href, className }) => {
  return (
    <div className={className}>
      <FlyoutLink href={href}>{link}</FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-2 left-0 -right-2 h-[1px] origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

export default TextAnimation;
