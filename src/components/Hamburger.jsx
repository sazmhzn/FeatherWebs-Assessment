import { motion } from "framer-motion";
import React, { memo, useRef } from "react";
import { useDimensions } from "../hooks/use-dimensions";
import { HamburgerToggle } from "./HamburgerToggle";

const Hamburger = memo(({ isOpen, toggleOpen }) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="relative z-20">
      {/* <div className="absolute bg-yellow-50 w-full">s</div>{" "} */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        custom={height}
        ref={containerRef}
        className=" py-4 md:px-2 md:py-2"
      >
        {" "}
        <HamburgerToggle isOpen={isOpen} toggle={toggleOpen} />
      </motion.nav>
    </div>
  );
});

export default Hamburger;

// import React from "react";
// import { motion } from "framer-motion";

// const Hamburger = ({ isOpen, toggleOpen }) => {
//   return (
//     <motion.button
//       onClick={toggleOpen}
//       className="relative z-50 w-12 h-12 flex flex-col justify-center items-center"
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//     >
//       <motion.span
//         className="absolute w-6 h-1 bg-rojo origin-left"
//         variants={{
//           closed: {
//             rotate: 0,
//             y: -4,
//             transition: { duration: 0.3 },
//           },
//           open: {
//             backgroundColor: "white",

//             rotate: -45,
//             y: 12,
//             transition: { duration: 0.3 },
//           },
//         }}
//       />
//       <motion.span
//         className="absolute w-6 h-1 bg-rojo origin-left"
//         variants={{
//           closed: {
//             rotate: 0,
//             y: 4,
//             transition: { duration: 0.3 },
//           },
//           open: {
//             backgroundColor: "white",
//             rotate: 45,
//             y: 2,
//             transition: { duration: 0.3 },
//           },
//         }}
//       />
//     </motion.button>
//   );
// };

// export default Hamburger;
