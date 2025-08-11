import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-frame-9 text-frame-1 dark:bg-frame-1 dark:text-frame-9 py-20 overflow-hidden"
    >
      {/* Soft Glow Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-white/10 dark:bg-white/5 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="section-styles text-center relative z-10">
        <h4 className="text-lg">Hello, I'm</h4>
        <h1 className="text-5xl font-bold">
          Asif <span className="text-frame-light-1 dark:text-frame-dark-1">Azad</span>
        </h1>
        <h3 className="text-2xl mt-2">Full Stack Developer</h3>
        <p className="max-w-xl mx-auto mt-4 text-frame-2">
          Crafting Interactive Web Experiences with the MERN Stack
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <button className="px-6 py-3 bg-frame-light-1 dark:bg-frame-dark-1 text-white rounded-md">
            View My Work
          </button>
          <button className="px-6 py-3 border border-frame-light-1 dark:border-frame-dark-1 rounded-md">
            Download Resume
          </button>
        </div>
        <div className="mt-6 text-sm opacity-80">
          <p>Available for freelance work</p>
          <p>Based in Dhaka, Bangladesh</p>
        </div>
        <div className="mt-8">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;
