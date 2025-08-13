import React from "react";
import AboutCard from "./AboutCard";
import image from "../../../assets/images/asif.JPG";
import GradientBar from "../../../components/navbar/GradientBar";
import { motion } from "framer-motion";

const About = () => {
  // Motion variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <section
      id="about"
      className="bg-frame-8 text-frame-2 dark:bg-frame-2 dark:text-frame-9"
    >
      <div className="section-styles grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* image */}
        <motion.div
          className="col-span-2 flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-[300px] h-[400px]">
            <div className="absolute top-0 left-0 rotate-2 scale-105 w-full h-full bg-gray-600 dark:bg-gray-300 rounded-lg opacity-30 transform"></div>
            <div className="absolute top-0 left-0 -rotate-2 scale-105 w-full h-full bg-gray-700 dark:bg-gray-400 rounded-lg opacity-40 transform"></div>
            <img
              src={image}
              alt="profile"
              className="relative w-full h-full rounded-lg object-cover border-4 border-frame-7 dark:border-frame-3"
            />
          </div>
        </motion.div>

        {/* content */}
        <motion.div
          className="col-span-3"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-2xl md:text-5xl font-bold mb-4">About Me</h1>
          <GradientBar />
          <div className="space-y-4 mt-5 text-frame-3 dark:text-frame-7">
            <motion.p variants={paragraphVariants}>
              Hi, I'm{" "}
              <span className="text-frame-1 dark:text-frame-9 font-medium">
                Asif Azad
              </span>{" "}
              — a passionate MERN Stack Developer with a knack for building
              clean, responsive, and interactive web applications.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              With expertise across the full development stack, I create
              seamless digital experiences that not only look great but perform
              exceptionally.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <AboutCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
