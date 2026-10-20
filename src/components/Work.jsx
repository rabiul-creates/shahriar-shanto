import { motion } from "motion/react";

export default function Work() {
  const parentVariant = {
    hover: { scale: 0.98 },
  };
  const childVariant = {
    hover: { x: 0, y: -50, rotate: -15 },
  };
  const childVariant2 = {
    hover: { x: -10, y: -90, rotate: -10 },
  };
  const childVariant3 = {
    hover: { x: -40, y: -70, rotate: -10 },
  };

  return (
    <div
      id="work"
      className="w-full mx-auto max-w-[120rem] min-h-screen  relative  text-black  "
    >
      <div className="w-full h-full">
        <div className="w-full h-[8vh]  flex items-start justify-start bg-sky-100">
          <div className="w-60 bg-white h-full flex items-end justify-center rounded-tr-md ">
            <h1 className="text-4xl font-NewKansasSwash">Work </h1>
          </div>
        </div>

        <div className="w-full h-[92vh] bg-white text-base  flex flex-col items-start justify-around px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 py-10 ">
          <div className="w-full text-gray-800 ">
            <p>Some of my work and case studies</p>
            <div className="w-full border-b border-gray-400 mt-5" />
          </div>

          <div className="w-full max-w-[71rem] mx-auto h-full flex  items-center justify-center sm:justify-between flex-col sm:flex-row  gap-10 sm:gap-12 md:gap-15 ">
            <div className="w-full h-full flex flex-col  justify-center mx-auto ">
              <motion.div
                variants={parentVariant}
                whileHover="hover"
                whileTap="hover"
                className="w-full h-full max-h-60 max-w-120 mb-14 sm:mb-25 relative group"
              >
                <div className="w-full h-full relative">
                  <div className="w-1/2 h-6 sm:h-12 -mb-2 bg-sky-300 rounded-t-sm "></div>
                  <div className="w-full h-full bg-sky-300 rounded-b-sm rounded-tr-sm pt-1 sm:pt-2">
                    <div className="w-full h-5 sm:h-8 relative">
                      <div className="absolute bottom-0 left-10  w-1/4 h-2 sm:h-3 bg-white"></div>
                      <div className="absolute right-0 -bottom-2  w-2/3 h-5 sm:h-10 bg-sky-200 rounded-t-2xl z-2"></div>
                    </div>

                    <div className="w-full h-full absolute  z-2 bg-sky-200 rounded-b-sm rounded-tl-2xl flex items-center justify-center font-MoonTime text-4xl sm:text-5xl">
                      <h1>Voci Perfuma</h1>
                    </div>
                  </div>
                  <motion.div
                    variants={childVariant}
                    className="absolute top-0 right-0 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 rotate-5 translate-y-0 md:translate-y-5"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                  <motion.div
                    variants={childVariant2}
                    className="absolute top-0 right-40 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 -rotate-15 translate-y-2 md:translate-y-10"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                  <motion.div
                    variants={childVariant3}
                    className="absolute top-2 right-15 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 rotate-5 translate-y-0 md:translate-y-5"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="flex items-center justify-between max-w-120 ">
                <h1 className="text-base sm:text-lg md:text-xl">
                  Voci Perfuma
                </h1>
                <h2 className="text-xs sm:text-sm text-gray-800">
                  In progress, 2026
                </h2>
              </div>
            </div>

            <div className="w-full h-full flex flex-col  justify-center mx-auto ">
              <motion.div
                variants={parentVariant}
                whileHover="hover"
                whileTap="hover"
                className="w-full h-full max-h-60 max-w-120 mb-14 sm:mb-25 relative group"
              >
                <div className="w-full h-full relative">
                  <div className="w-1/2 h-6 sm:h-12 -mb-2 bg-sky-300 rounded-t-sm "></div>
                  <div className="w-full h-full bg-sky-300 rounded-b-sm rounded-tr-sm pt-1 sm:pt-2">
                    <div className="w-full h-5 sm:h-8 relative">
                      <div className="absolute bottom-0 left-10  w-1/4 h-2 sm:h-3 bg-white"></div>
                      <div className="absolute right-0 -bottom-2  w-2/3 h-5 sm:h-10 bg-sky-200 rounded-t-2xl z-2"></div>
                    </div>

                    <div className="w-full h-full absolute  z-2 bg-sky-200 rounded-b-sm rounded-tl-2xl flex items-center justify-center font-MoonTime text-4xl sm:text-5xl">
                      <h1>Era Gardena</h1>
                    </div>
                  </div>
                  <motion.div
                    variants={childVariant}
                    className="absolute top-0 right-0 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 rotate-5 translate-y-0 md:translate-y-5"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                  <motion.div
                    variants={childVariant2}
                    className="absolute top-0 right-40 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 -rotate-15 translate-y-2 md:translate-y-10"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                  <motion.div
                    variants={childVariant3}
                    className="absolute top-2 right-15 w-25 h-30 sm:w-30 sm:h-40 p-1.5 bg-white border border-black/30 shadow-xl z-1  shadow-black/20 rotate-5 translate-y-0 md:translate-y-5"
                  >
                    <div className="w-full h-full bg-neutral-600"></div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="flex items-center justify-between max-w-120 ">
                <h1 className="text-base sm:text-lg md:text-xl">Era Gardena</h1>
                <h2 className="text-xs sm:text-sm text-gray-800">
                  In progress, 2026
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
