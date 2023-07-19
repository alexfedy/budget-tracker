import React from "react";
import { motion } from "framer-motion";

const hero = "/hero-optimized-cropped.jpeg";

const HeroComponent = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-12 pb-10 sm:pb-16 lg:pb-24"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl tracking-tighter font-bold sm:text-6xl lg:text-7xl">
                A Simple Budget&nbsp;
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-primary"></span>
                  <h1 className="relative text-4xl font-bold sm:text-6xl lg:text-7xl">
                    Tracker.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base sm:text-xl">
                A simple finance tracker web app build with react, tailwind, and
                daisyUI.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/finance-tracker"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-xl font-semibold transition-all duration-200 bg-secondary text-secondary-content hover:bg-secondary-focus"
                  role="button"
                >
                  Start tracking
                </a>
              </div>
            </div>

            <div>
              <img className="w-full rounded shadow-2xl" src={hero} alt="" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default HeroComponent;
