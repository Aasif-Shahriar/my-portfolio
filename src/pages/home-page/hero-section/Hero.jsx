import React from "react";

const Hero = () => {
  return (
    <section id="home" className=" bg-frame-1 text-frame-9 ">
      <div className="section-styles text-center">
        <h4>Hello, I'm</h4>
        <h1>
          Asif <span>Azad</span>
        </h1>
        <h3>Full Stack Developer</h3>
        <p>Crafting Interactive Web Experiences with the MERN Stack</p>
        <div>
          <button>View My Work</button>
          <button>Download Resume</button>
        </div>
        <div>
          <p>Available for freelance work</p>
          <p>Based in Dhaka, Bangladesh</p>
        </div>
        <div>Scroll</div>
      </div>
    </section>
  );
};

export default Hero;
