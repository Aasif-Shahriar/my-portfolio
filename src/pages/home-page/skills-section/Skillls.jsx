import React, { useEffect, useState } from "react";
import GradientBar from "../../../components/navbar/GradientBar";
import axios from "axios";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiReactquery,
  SiAxios,
  SiGit,
  SiGithub,
  SiFramer,
  SiReacthookform,
  SiNetlify,
  SiVercel,
  SiVite,
  SiOpenai,
  SiCanva,
  SiJsonwebtokens,
  SiDaisyui,
} from "react-icons/si";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const skillNameToIconMap = {
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    JavaScript: SiJavascript,
    React: SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    Firebase: SiFirebase,
    "TanStack Query": SiReactquery,
    Axios: SiAxios,
    Git: SiGit,
    GitHub: SiGithub,
    JWT: SiJsonwebtokens,
    "Chat GPT": SiOpenai,
    "Framer Motion": SiFramer,
    DaisyUI: SiDaisyui,
    Canva: SiCanva,
    "React Hook Form": SiReacthookform,
    Netlify: SiNetlify,
    Vercel: SiVercel,
    Vite: SiVite,
  };

  useEffect(() => {
    axios
      .get("/skills.json")
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const allSkills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "React-Router",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "TanStack Query",
    "Axios",
    "Git",
    "GitHub",
    "JWT",
    "RESTful APIs",
    "Chat GPT",
    "Framer Motion",
    "DaisyUI",
    "Canva",
    "React Hook Form",
    "EmailJS",
    "Rechart",
    "Netlify",
    "Vercel",
    "Vite",
  ];

  const SkillCardSkeleton = () => (
    <div className="border border-frame-1/15 dark:border-frame-9/15 p-4 flex gap-3 bg-frame-7/50 dark:bg-frame-3/50 rounded-xl">
      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
      <div className="flex-1">
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className=" text-frame-2 dark:text-frame-9 bg-frame-8 dark:bg-frame-2 overflow-hidden"
    >
      <div className="section-styles relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-frame-1 dark:text-frame-9">
            Skills & Tools
          </h1>
          <GradientBar />
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl text-frame-3 dark:text-frame-7">
            My technical arsenal for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Marquee Section */}
        <div className="mb-12 md:mb-16">
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex"
              animate={{ x: ["0vw", "-100vw"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }}
            >
              {[...skills, ...skills].map(({ skill, color }, idx) => {
                const IconComponent = skillNameToIconMap[skill];
                return (
                  <div
                    key={`${skill}-${idx}`}
                    className="flex flex-col items-center justify-center mx-4 w-24"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-frame-1/20 dark:border-frame-9/20 flex items-center justify-center mb-2">
                      {IconComponent ? (
                        <IconComponent color={color} size={32} />
                      ) : (
                        <div className="w-10 h-10"></div>
                      )}
                    </div>
                    <span className="text-xs text-center text-frame-1 dark:text-frame-9 truncate w-full">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Reverse Marquee */}
          <div className="overflow-hidden py-4 mt-2">
            <motion.div
              className="flex"
              animate={{ x: ["-100vw", "0vw"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }}
            >
              {[...skills, ...skills].map(({ skill, color }, idx) => {
                const IconComponent = skillNameToIconMap[skill];
                return (
                  <div
                    key={`${skill}-rev-${idx}`}
                    className="flex flex-col items-center justify-center mx-4 w-24"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-frame-1/20 dark:border-frame-9/20 flex items-center justify-center mb-2">
                      {IconComponent ? (
                        <IconComponent color={color} size={32} />
                      ) : (
                        <div className="w-10 h-10"></div>
                      )}
                    </div>
                    <span className="text-xs text-center text-frame-1 dark:text-frame-9 truncate w-full">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            Technologies and Tools That I Know
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="px-6 py-3 bg-gray-300 dark:bg-gray-800/50 rounded-full font-medium cursor-default select-none
                  text-gray-900 dark:text-gray-100
                  hover:bg-gray-400 dark:hover:bg-gray-600
                  transition-colors duration-300"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-frame-3 dark:via-frame-6 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
