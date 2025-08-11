import React from "react";
import ProjectCard from "./ProjectCard";
import GradientBar from "../../../components/navbar/GradientBar";

const Projects = () => {
  return (
    <section id="projects" className="bg-frame-9 text-frame-9 dark:bg-frame-1">
      <div className="section-styles">
        {/* top content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="section-title">Featured Projects</h1>
          {/* horizontal bar */}
          <GradientBar />
          {/* sub title */}
          <p className="section-sub-title">
            A showcase of my recent MERN stack applications, demonstrating
            full-stack development capabilities and modern web technologies.
          </p>
        </div>
        {/* projects card */}
        <div className="space-y-20">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
