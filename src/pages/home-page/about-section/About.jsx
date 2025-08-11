import React from "react";
import AboutCard from "./AboutCard";
import image from "../../../assets/images/asif.JPG";
import GradientBar from "../../../components/navbar/GradientBar";

const About = () => {
  return (
    <section
      id="about"
      className="bg-frame-8 text-frame-2 dark:bg-frame-2 dark:text-frame-9"
    >
      <div className="section-styles grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* image */}
        <div className="col-span-2 flex items-center justify-center">
          {" "}
          <div className="relative w-[300px] h-[400px]">
            {/* Background layers */}
            <div className="absolute top-0 left-0 rotate-2  scale-105 w-full h-full bg-gray-600 dark:bg-gray-300 rounded-lg opacity-30 transform "></div>
            <div className="absolute top-0 left-0 -rotate-2   scale-105 w-full h-full bg-gray-700 dark:bg-gray-400 rounded-lg opacity-40 transform "></div>

            {/* Main image */}
            <img
              src={image}
              alt="profile"
              className="relative w-full h-full rounded-lg object-cover border-4 border-frame-7 dark:border-frame-3"
            />
          </div>
        </div>

        {/* content */}
        <div className="col-span-3">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">About Me</h1>
          {/* bar */}
          <GradientBar />

          <div className="space-y-4 mt-5 text-frame-3 dark:text-frame-7">
            <p>
              Hi, I'm{" "}
              <span className="text-frame-1 dark:text-frame-9 font-medium">
                Asif Azad
              </span>{" "}
              — a passionate MERN Stack Developer with a knack for building
              clean, responsive, and interactive web applications. From managing
              user-friendly interfaces to handling secure backend logic, I love
              solving real-world problems through code.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
