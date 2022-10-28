import React from "react";
import ProjectTile from "./ProjectTile";
import projectData from "../data_files/projectsData";

export default function ProjectSection() {
  const projects = projectData.projects.map((ele) => {
    return (
      <ProjectTile
        name={ele.item}
        description={ele.description}
        tech={ele.tech}
        aws={ele.aws}
      />
    );
  });

  return (
    <section
      className="section-background-inverse"
      style={{ position: "relative" }}
      id="projects"
    >
      <h2 className="section-header">Projects</h2>
      <div
        style={{
          display: "flex",
          maxWidth: "55%",
          margin: "0 auto",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        {projects}
      </div>
    </section>
  );
}
