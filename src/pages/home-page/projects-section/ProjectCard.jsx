import axios from "axios";
import React, { useEffect, useState } from "react";

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
      {projects?.map((project, idx) => (
        <div
          key={idx}
          className={`flex gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : "flex-row"
          }`}
        >
          {/* project  image */}
          <div className="flex-1">
            <img
              src={project.projectImg}
              alt={project.projectTitle}
              className=""
            />
          </div>
          {/* project content */}
          <div className="flex-1">
            <h4>{project.projectType}</h4>
            <h1>{project.projectTitle}</h1>
            <p>{project.projectInfo}</p>
            <div>
              <p>Tech Stack</p>
              <div>
                {project.techStack.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                live
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
