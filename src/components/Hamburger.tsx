import { motion, sync, useCycle } from "framer-motion";
import React, { useRef } from "react";
import { useDimensions } from "../hooks/use-dimensions";
import { HamburgerToggle } from "./HamburgerToggle";

const Hamburger = ({ isOpen, toggleOpen }) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="relative z-20">
      {/* <div className="absolute bg-yellow-50 w-full">s</div>{" "} */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={300}
        ref={containerRef}
        className="bg-red-300"
      >
        {" "}
        <HamburgerToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default Hamburger;
