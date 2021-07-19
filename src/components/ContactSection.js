import React from "react";
import ImageTile from "./ImageTile";

const ContactSection = (props) => {
  return (
    <div>
      <main className="main-container" id="contact">
        <section className="title-section">
          <h1 className="title-header"> {props.containerName} </h1>
        </section>
        <div className="contact-container">
          <div className="tile-grid-container">
            <button>
              <a href="https://www.linkedin.com/in/edelzamora/">
                <ImageTile link="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" />
              </a>
            </button>
            <button>
              <a href="https://github.com/edelzamora">
                <ImageTile link="https://www.vectorlogo.zone/logos/github/github-ar21.svg" />
              </a>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactSection;
