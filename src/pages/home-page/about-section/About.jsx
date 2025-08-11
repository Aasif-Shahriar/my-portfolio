import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about" className="bg-frame-2 text-frame-9">
      <div className="section-styles flex items-center gap-20">
        {/* image */}
        <div>
          <div className="border-2 border-frame-4 w-xl h-[576px]"></div>
          <span>Available</span>
        </div>
        {/* content */}
        <div className="space-y-6">
          <h1>About Me</h1>
          {/* bar */}
          <div className="space-y-4">
            <p>
              Hi, I'm Asif Azad — a passionate MERN Stack Developer with a knack
              for building clean, responsive, and interactive web applications.
              From managing user-friendly interfaces to handling secure backend
              logic, I love solving real-world problems through code.
            </p>
            <p>
              With expertise across the full development stack, I create
              seamless digital experiences that not only look great but perform
              exceptionally. My approach combines technical precision with
              creative problem-solving to deliver applications that truly make a
              difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
