import React from "react";

const Navigation = () => {
  return (
    <>
      <div className=" p-6 w-full font-primary">
        <div className="min-h-screen mx-auto w-full">
          <div className="sm:mx-48 mx-20 md:mx-96">
            <section className="relative md:mx-40 w-[80%] mt-[7%] ">
              <div className="pl-[5rem] mb-[8%]">
                <div className="mb-14">
                  <span className="h-16 top-[4%] absolute left-8 w-[2px] bg-red-600" />
                  <span className="h-16 top-[28%] absolute left-8 w-[2px] bg-red-600" />{" "}
                  <h1 className="relative text-[#1b0f25] text-[54px] font-bold leading-[6rem] tracking-[-2px]">
                    Craf
                    <span className="tracking-[-0px]">t</span>
                    ing beautiful{" "}
                    <span className="-ml-2 text-[5rem] tracking-[-8px]">
                      &
                    </span>{" "}
                    <span className="tracking-[-3px]">innovative </span>
                    <span className="tracking-[-2px] relative">
                      Websites,
                      <span className=" ml-1">mobile and web </span>{" "}
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
                </div>
              </div>
            </section>

            <section className="relative md:ml-32 w-[85%]">
              <div className="pl-[0rem]">
                <img src="/grilled-burger-recipe-5.jpg" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
