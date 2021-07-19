import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-grid">
      <h3>{props.name}</h3>
      <a href={`#/project/${props.url}`}>
        <button>Details</button>
      </a>
    </div>
  );
};

export default ProjectCard;
