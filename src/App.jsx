import {
  motion,
  AnimatePresence,
  useCycle,
  animate,
  useMotionValue,
} from "framer-motion";
// import BackgroundWithImage from "./components/BackgroundWithImage";
import Header from "./components/Header";
import Example from "./components/FlipText";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "White Papers", href: "/white-papers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Telecom", href: "/telecom" },
  { label: "Edtech", href: "/edtech" },
  { label: "Fintech", href: "/fintech" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "E-Commerce", href: "/ecommerce" },
  { label: "Real Estate", href: "/real-estate" },
];
const socialLink = [
  { label: "LinkedIn", href: "/home" },
  { label: "Instagram", href: "/services" },
  { label: "Facebook", href: "/projects" },
  { label: "Dribble", href: "/industries" },
  { label: "Twitter", href: "/about" },
  { label: "Pinterest", href: "/about" },
];
const country = [
  { label: "India", href: "/home" },
  { label: "USA", href: "/services" },
  { label: "UAE", href: "/projects" },
  { label: "Vietnam", href: "/industries" },
];

// Sidebar animation variants
const sidebarVariants = {
  closed: {
    top: 14,
    height: 0,
    width: "calc(100% - 3rem)", // 3rem equals 6 * 0.5rem margin on both sides

    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  open: {
    top: 14,
    height: "calc(100% - 3rem)", // 3rem equals
    width: "calc(100% - 3rem)", // 3rem equals 6 * 0.5rem margin on both sides

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Background color animation variants
const backgroundVariants = {
  initial: { backgroundColor: "rgba(227, 18, 48, 1)" },
  animate: {
    backgroundColor: "rgba(54, 194, 58, 1)",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  exit: {
    backgroundColor: "rgba(255, 0, 0, 1)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Navigation link animation variants
const linkVariants = {
  closed: {
    opacity: 0,
    x: -20,
    transition: {
      // y: { stiffness: 1000 },
      duration: 1,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 24,
      duration: 1,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      // y: { stiffness: 1000 },
      duration: 0.2,
    },
  },
};

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      {/* <Example text={"Hello"} /> */}
      <div className="md:p-6 p-1 w-full relative overflow-y-hidden font-primary max-h-screen">
        <div className=" overflow-hidden mx-auto">
          <div className="sm:mx-48 mx-0 md:mx-96">
            <Header isOpen={isOpen} toggleOpen={toggleOpen} />

            <section className=" relative md:mx-40 md:w-[80%] mx-auto mt-[7%] opacity-1">
              <div className="mx-auto max-sm:w-[90%] md:pl-[5rem] mb-[8%]">
                <div className="mb-14">
                  <span className="h-16 max-sm:hidden top-[2%] md:top-[4%] absolute left-8 w-[2px] bg-red-600" />
                  <span className="h-16 max-sm:hidden top-[14%] md:top-[28%] absolute left-8 w-[2px] bg-red-600" />{" "}
                  <h1 className=" relative text-[#1b0f25] text-[2.8rem] md:text-[5.4rem] font-semibold md:font-bold leading-[4rem] md:leading-[6rem] tracking-tight md:tracking-[-2px]">
                    Craf
                    <span className="tracking-[-0px]">t</span>
                    ing beautiful{" "}
                    <span className="-ml-2 text-[2.8rem] md:text-[5rem] tracking-[-8px]">
                      &
                    </span>{" "}
                    <span className="max-sm:block tracking-normal md:tracking-[-3px]">
                      innovative{" "}
                    </span>
                    <span className="tracking-normal md:tracking-[-2px] relative w-1/2 md:w-full ">
                      Websites,
                      <span className=" ml-1 ">mobile and web </span>{" "}
                      applications
                    </span>
                  </h1>
                </div>

                <div className="flex items-start gap-[7%] bg-red-300/15">
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center text-[1.4rem]">
                      One Billion{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-wide">
                      Lives Touced
                    </span>
                  </article>
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center text-[1.4rem]">
                      30{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-wide">
                      Global Awards
                    </span>
                  </article>
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center text-[1.4rem]">
                      300{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-wide">Clients</span>
                  </article>
                </div>
              </div>
            </section>

            <section className="relative mx-auto md:ml-32 w-[90%] md:w-[85%]">
              <div className="pl-[0rem] md:h-[200px]  overflow-hidden">
                <img src="/grilled-burger-recipe-5.jpg" height={10} alt="" />
              </div>
            </section>
          </div>
          {/* Fullscreen Sidebar */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                className="fixed md:overflow-y-hidden overflow-y-scroll w-full top-0 left-1/2  transform -translate-x-1/2 h-screen  z-10 flex flex-col justify-center items-center"
              >
                <div className="flex md:flex-row flex-col w-full min-h-screen">
                  <motion.div
                    // initial={{ backgroundColor: "red" }}
                    // animate={{
                    //   backgroundColor: "green",
                    //   transition: {
                    //     duration: 1,
                    //     ease: "easeInOut",
                    //   },
                    // }}
                    // exit={{ backgroundColor: "red" }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={backgroundVariants}
                    className="md:w-[60%] py-[3em] grid grid-cols-1 items-end"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        // duration: 10,
                        opacity: 1,
                        ease: "easeInOut",
                      }}
                      // exit={{ opacity: 0 }}
                      transition={{ duration: 5 }}
                      className="flex md:flex-row items-start justify-start flex-col w-full mt-[10%] md:mt-[4.2%] gap-[5%] md:gap-[10%]"
                    >
                      <ul className="flex mt-[1%] md:ml-[13%] flex-1 md:w-fit mx-0 text-left flex-col items-start justify-start">
                        {navLinks.slice(0, 5).map((link, index) => (
                          <Example
                            className="w-full text-white text-3xl px-6 pb-[2rem] font-bold"
                            link={link.label}
                            href={link.href}
                          />
                          // <a
                          //   key={index}
                          //   href={link.href}
                          //   variants={linkVariants}
                          //   className="w-full text-white text-3xl px-6 pb-[2rem] font-bold"
                          // >
                          //   {link.label}
                          // </a>
                        ))}
                      </ul>
                      <div className="flex md:w-3/4 items-start  md:mx-auto text-left justify-start">
                        <div className="flex md:w-1/2  md:ml-[12%] flex-col items-start  md:mx-auto text-left justify-start">
                          {navLinks.slice(5, 11).map((link, index) => (
                            <Example
                              className="text-md w-full text-left max-sm:px-6 pb-[0.6rem] text-white "
                              link={link.label}
                              href={link.href}
                            />
                          ))}
                        </div>

                        <div className="flex md:w-1/2  md:ml-[0%] flex-col items-center md:mx-auto text-left justify-start">
                          {navLinks.slice(11).map((link, index) => (
                            <Example
                              className="text-md md:ml-[18%] w-full  max-sm:px-6 text-left pb-[0.5rem] text-white"
                              link={link.label}
                              href={link.href}
                            />
                          ))}
                        </div>
                      </div>
                      {/* <div className="flex w-1/3 flex-col items-start justify-start">
                        {navLinks.slice(11).map((link, index) => (
                          <motion.a
                            key={index}
                            href={link.href}
                            variants={linkVariants}
                            className="text-md md:ml-[18%] w-full  max-sm:px-6 text-left pb-[0.6rem] text-white"
                          >
                            {link.label}
                          </motion.a>
                        ))}
                      </div> */}
                    </motion.div>

                    <div>
                      <ul className="flex  max-sm:flex-wrap mt-[5%] md:mt-[1%] ml-[1%] md:ml-[13%] w-fit text-left items-center justify-center">
                        {socialLink.map((link, index) => (
                          <Example
                            className="w-fit text-white text-sm px-4 pb-[2rem] font-medium"
                            link={link.label}
                            href={link.href}
                          />
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <div className="md:w-[40%] bg-purple py-[3em] grid grid-cols-1 max-sm:gap-24 items-end">
                    <div className=" flex  space-y-8 flex-col items-start gap-0 justify-center ml-[6%] md:ml-[16%]  mt-[6%] text-white">
                      <p className="text-sm ">Got An Idea?</p>
                      <h2 className="text-3xl tracking-tight font-bold w-[100%] leading-[110%]">
                        Let's Craft Brillliance together!
                      </h2>

                      <button className="rounded-full border-2 max-sm:my-[3%] bg-green-500 text-white text-sm px-[1.2em] py-[1.1em] border-white">
                        Get in touch
                      </button>
                    </div>

                    <div>
                      <ul className="flex mt-[0%] ml-[6%] md:ml-[14%] w-fit text-left items-center justify-start">
                        {country.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            variants={linkVariants}
                            className="w-full text-white text-sm px-4 pb-[2rem] font-medium"
                          >
                            {link.label}
                          </a>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <motion.a
                  variants={linkVariants}
                  className="text-3xl text-white  hover:text-gray-200 transition-colors duration-300"
                >
                  Let's talk
                </motion.a> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;