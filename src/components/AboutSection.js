import React from "react";

const AboutSection = () => {
  return (
    <div>
      <main className="main-container" id="about">
        <section className="title-section">
          <h1 className="title-header">About</h1>
        </section>
        <div id="about-section">
          <div id="about-me">
            <h3 id="name-title">Hi, I am Edel Zamora</h3>
            <br></br>
            <p id="about-description">
              I am a student at the University of Virginia. My major is computer
              science and I am interested in software engineering roles. Some
              other interests include cloud engineering, DevOps and back-end
              engineering.
            </p>
          </div>
          <div id="img"></div>
        </div>
      </main>
    </div>
  );
};
export default AboutSection;
