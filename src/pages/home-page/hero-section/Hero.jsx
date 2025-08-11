import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  const handleClickScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative bg-frame-9 text-frame-1 dark:bg-frame-1 dark:text-frame-9 overflow-hidden"
    >
      {/* Soft Glow Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40%] h-[80%] bg-black/10 dark:bg-white/5 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="section-styles flex flex-col justify-center items-center relative z-10 space-y-6">
        <h4 className="text-lg text-frame-3 dark:text-frame-6 font-semibold">
          Hello, I'm
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-frame-2 dark:text-frame-8">
          Asif{" "}
          <span className="text-frame-light-1 dark:text-frame-dark-1">
            Azad
          </span>
        </h1>
        <h3 className="text-2xl md:text-4xl font-light mt-2">
          MERN Stack Developer
        </h3>
        {/* slogan */}
        <p className="text-center text-frame-2 dark:text-frame-8 md:text-xl">
          Crafting Interactive Web Experiences with the MERN Stack
        </p>
        {/* view & resume btn */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <button onClick={handleClickScroll} className="btn-primary px-6 py-3">
            <FaRegEye size={20} />
            View My Work
            <IoMdArrowForward size={20} />
          </button>
          <a
            href="/Asif_Azad_Resume.pdf"
            download="Asif_Azad_Resume.pdf"
            className="btn-outline px-6 py-3"
          >
            <MdOutlineFileDownload size={20} />
            Download Resume
          </a>
        </div>
        {/* message & location */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6 text-frame-3 dark:text-frame-5">
          <p className="flex items-center gap-2">
            <motion.span
              animate={{ color: ["#0a7e5f", "#22c55e", "#0a7e5f"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="text-green-500"
            >
              <GoDotFill />
            </motion.span>
            Available for freelance work
          </p>
          <div className="hidden md:block h-5 border-r border-frame-2 dark:border-frame-8"></div>
          <p>Based in Dhaka, Bangladesh</p>
        </div>
        {/* animate up and down */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <p className="uppercase text-frame-2 dark:text-frame-7 text-xs">
            Scroll
          </p>
          <div className="h-12 w-[1px] bg-gradient-to-b from-frame-1 to-frame-9 dark:from-frame-9 dark:to-frame-1"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
