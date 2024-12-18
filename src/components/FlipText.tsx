import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = ({ link, href, className }) => {
  return (
    <div className={className}>
      <FlyoutLink href={href}>{link}</FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(0.8)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 left-0 -right-2 h-[1px] origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

export default Example;
