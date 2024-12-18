// import * as React from "react";
// import { motion } from "framer-motion";

// const Path = (props) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3"
//     stroke="hsl(0, 0%, 18%)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// export const HamburgerToggle = ({ toggle }) => (
//   <button onClick={toggle}>
//     <svg width="12" height="12" viewBox="0 0 23 23">
//       <Path
//         variants={{
//           closed: { d: "M 2 2.5 L 20 2.5" },
//           open: { d: "M 3 16.5 L 17 2.5" },
//         }}
//       />

//       <Path
//         variants={{
//           closed: { d: "M 2 16.346 L 20 16.346" },
//           open: { d: "M 3 2.5 L 17 16.346" },
//         }}
//       />
//     </svg>
//   </button>
// );

import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    stroke={props.isOpen ? "hsl(0, 100%, 100%)" : "hsl(0, 100%, 50%)"}
    variants={props.variants}
    initial={props.initial}
    animate={props.animate}
    transition={{ duration: 0.3 }}
    {...props}
  />
);

export const HamburgerToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle}>
    <svg width="14" height="14" viewBox="0 0 23 23">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      />

      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);
