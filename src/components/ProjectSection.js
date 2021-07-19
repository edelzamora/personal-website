import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = (props) => {
  return (
    <div>
      <main className="main-container" id="project">
        <section className="title-section">
          <h1 className="title-header"> {props.containerName} </h1>
        </section>
        <div className="project-grid-container">
          <ProjectCard name={"Meme Magic Design"} url={"mememagic"} />
          <ProjectCard name={"To Do App"} url={"todo"} />
          <ProjectCard name={"Card Spending"} url={"spend"} />
          <ProjectCard name={"Personal Website"} url={"website"} />
        </div>
      </main>
    </div>
  );
};

export default ProjectSection;
