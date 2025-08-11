import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-frame-1 text-frame-9">
      <div className="section-styles">
        {/* top content */}
        <div>
          <h1>Featured Projects</h1>
          {/* horizontal bar */}
          <div></div>
          {/* sub title */}
          <p>
            A showcase of my recent MERN stack applications, demonstrating
            full-stack development capabilities and modern web technologies.
          </p>
        </div>
        {/* projects card */}
        <div className="space-y-5">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
