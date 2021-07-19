import React, { Component } from "react";
import Navbar from "./Navbar";
import { Data } from "./Data";
import ImageTile from "./ImageTile";

const ProjectDetail = (props) => {
  const paramName = props.match.params.name;
  let projectObj = {};
  for (const [key, value] of Object.entries(Data[0])) {
    if (value.id == paramName) {
      projectObj = { ...value };
    }
  }

  let projectLinks = [];
  if (projectObj.links != 0) {
    projectObj.links.forEach((element) => {
      projectLinks.push(<ImageTile link={element} />);
    });
  }

  return (
    <div>
      <Navbar />
      <main className="project-container">
        <h3 id="project-name">{projectObj.name}</h3>
        <section className="project-section">
          <h1 className="project-header">About the Project</h1>
        </section>
        <div id="project-contents">
          <div id="about-me">
            <br></br>
            <p id="about-description">{projectObj.description}</p>
            <p>The tech used was {projectObj.tech}</p>
            <p>Written in {projectObj.lang}</p>
            <p>This project was a {projectObj.type}</p>
          </div>
          <section className="project-section">
            <h1 className="title-header">Tech</h1>
          </section>
          <br></br>
          <div className="tile-grid-container">{projectLinks}</div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
