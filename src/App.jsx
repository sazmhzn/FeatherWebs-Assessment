import { motion, AnimatePresence, useCycle, delay } from "framer-motion";
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
      duration: 1,
      when: "afterChildren",
      staggerChildren: 0.05,
      delayChildren: 0.2,
      backgroundColor: { delay: 0.2 }, // Color changes mid-sequence
      height: { delay: 0.2 }, // Height closes last
    },
  },
  open: {
    top: 14,
    height: "calc(100% - 3rem)", // 3rem equals
    width: "calc(100% - 3rem)", // 3rem equals 6 * 0.5rem margin on both sides

    transition: {
      duration: 1,

      height: { duration: 0.3 },
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Background color animation variants
const backgroundVariants = {
  initial: {
    backgroundColor: "rgba(227, 18, 48, 1)",
    // opacity: 0,
  },
  animate: {
    backgroundColor: "rgba(54, 194, 58, 1)",
    // opacity: 1,
    transition: {
      duration: 2,
      // delay: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    backgroundColor: "rgba(255, 0, 0, 1)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Navigation link animation variants
const linkVariants = {
  closed: {
    opacity: 0,
    // y: 20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.3,
      delay: 0.4, // Delay to come after other elements
      ease: "easeInOut",
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
          <div className="sm:mx-20 mx-0 md:mx-44 lg:mx-96">
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
                      <span className="ml-1 ">
                        mobile <span className="md:-ml-2"> and web </span>{" "}
                      </span>
                      applications
                    </span>
                  </h1>
                </div>

                <div className="flex items-start gap-[7%] ">
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center  gap-0 text-[1.4rem]">
                      <span> One Billion </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-normal">
                      Lives Touced
                    </span>
                  </article>
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center text-[1.4rem]">
                      <span> 30</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-normal">
                      Global Awards
                    </span>
                  </article>
                  <article className="flex flex-col">
                    <h4 className="font-semibold inline-flex items-center text-[1.4rem]">
                      <span>300</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </h4>
                    <span className="text-[1.2rem] tracking-normal">
                      Clients
                    </span>
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
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={backgroundVariants}
                    className="md:w-[60%] py-[3em] grid grid-cols-1 items-end"
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="flex md:flex-row items-start justify-start flex-col w-full mt-[10%] md:mt-[4.2%] gap-[5%] md:gap-[10%]"
                    >
                      <ul
                        variants={linkVariants}
                        className="flex mt-[1%] md:ml-[13%] flex-1 md:w-fit mx-0 text-left flex-col items-start justify-start"
                      >
                        {navLinks.slice(0, 5).map((link, index) => (
                          <Example
                            className="w-full text-white text-3xl px-6 pb-[2rem] font-bold"
                            link={link.label}
                            href={link.href}
                          />
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
                    </motion.div>

                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <ul className="flex  max-sm:flex-wrap mt-[5%] md:mt-[1%] ml-[1%] md:ml-[13%] w-fit text-left items-center justify-center">
                        {socialLink.map((link, index) => (
                          <Example
                            className="w-fit text-white text-sm px-4 pb-[2rem] font-medium"
                            link={link.label}
                            href={link.href}
                          />
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>

                  <div className="md:w-[40%] bg-purple py-[3em] grid grid-cols-1 max-sm:gap-24 items-end">
                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className=" flex  space-y-8 flex-col items-start gap-0 justify-center ml-[6%] md:ml-[16%]  mt-[6%] text-white"
                    >
                      <p className="text-sm ">Got An Idea?</p>
                      <h2 className="text-3xl tracking-tight font-bold w-[55%] leading-[120%]">
                        Let's Craft Brillliance together!
                      </h2>

                      <button className="rounded-full border-2 max-sm:my-[3%] bg-green-500 text-white text-sm px-[1.2em] py-[1.1em] border-white">
                        Get in touch
                      </button>
                    </motion.div>

                    <motion.div
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <ul className="flex mt-[0%] ml-[6%] md:ml-[14%] w-fit text-left items-center justify-start">
                        {country.map((link, index) => (
                          <Example
                            className="w-fit text-white text-sm px-4 pb-[2rem] font-medium"
                            link={link.label}
                            href={link.href}
                          />
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
