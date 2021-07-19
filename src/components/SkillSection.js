import React from "react";
import ImageTile from "./ImageTile";

const SkillSection = (props) => {
  return (
    <div>
      <main className="main-container">
        <section className="title-section">
          <h1 className="title-header"> {props.containerName} </h1>
        </section>
        <div className="skill-grid-container">
          <ImageTile link="https://www.vectorlogo.zone/logos/python/python-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/java/java-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" />
          <ImageTile link="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg" />
        </div>
      </main>
    </div>
  );
};

export default SkillSection;
