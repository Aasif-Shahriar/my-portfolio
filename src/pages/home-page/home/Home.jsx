import React from "react";
import Hero from "../hero-section/Hero";
import About from "../about-section/About";
import Projects from "../projects-section/Projects";
import Skillls from "../skills-section/Skillls";
import ContactSection from "../contact-section/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skillls />
      <ContactSection />
    </>
  );
};

export default Home;
