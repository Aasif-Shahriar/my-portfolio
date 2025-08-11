import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    axios
      .get("/projectsData.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {projects?.map((project, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Project Image */}
          <motion.div
            className={`relative group ${
              index % 2 === 1 ? "lg:col-start-2" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
              <img
                src={project.projectImg}
                alt={project.projectTitle}
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Overlay buttons */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg text-center font-medium hover:bg-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800/80 backdrop-blur-sm text-gray-100 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700/80 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div
            className={`space-y-6 ${
              index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-frame-4 dark:text-frame-5 text-sm uppercase tracking-widest mb-2 block">
                {project.projectType}
              </h4>
              <h1 className="text-3xl md:text-4xl font-bold text-frame-2 dark:text-frame-8 mb-4">
                {project.projectTitle}
              </h1>
              <p className="text-frame-3 dark:text-frame-6 leading-relaxed text-lg">
                {project.projectInfo}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-frame-4 dark:text-frame-5 text-sm uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 bg-frame-8 dark:bg-frame-2 border border-frame-3/50 dark:border-frame-6/50 text-frame-3 dark:text-frame-7 rounded-full text-sm font-medium hover:border-frame-3 dark:hover:border-frame-6 hover:text-frame-2 dark:hover:text-frame-8 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 btn-primary"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 btn-outline"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
