import React from "react";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <ProjectSection containerName="Projects" />
      <SkillSection containerName="Skillset" />
      <ContactSection containerName="Contact Me" />
    </div>
  );
};

export default Home;
