import { Variants } from "framer-motion";

// Sidebar slide down animation
export const sidebarVariants: Variants = {
  closed: {
    top: 14,
    height: 0,
    opacity: 0,
    transition: {
      // Reverse the sequence when closing
      height: { delay: 0.5 }, // Height closes last
      opacity: { delay: 0 }, // Opacity starts first
      backgroundColor: { delay: 0.3 }, // Color changes mid-sequence
      staggerChildren: 0.05, // Links disappear quickly
      when: "afterChildren",
    },
  },
  open: {
    top: 14,
    height: "calc(100% - 3rem)",
    opacity: 1,
    transition: {
      // Sequence of opening
      height: { duration: 0.5 }, // Height expands first
      opacity: { delay: 0.3, duration: 0.3 }, // Then fade in
      staggerChildren: 0.1, // Stagger links appearance
      delayChildren: 0.5, // Links appear after height and opacity
      when: "beforeChildren",
    },
  },
};

// Background color animation
export const backgroundVariants: Variants = {
  initial: {
    backgroundColor: "rgba(227, 18, 48, 1)",
    // opacity: 0,
  },
  animate: {
    backgroundColor: "rgba(54, 194, 58, 1)",
    // opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5, // Delay color change until after height expansion
      ease: "easeInOut",
    },
  },
  exit: {
    backgroundColor: "rgba(255, 0, 0, 1)",
    // opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Navigation link animation
export const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
