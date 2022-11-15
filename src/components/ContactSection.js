import React from "react";
import ImageTile from "./ImageTile";
import { useState } from "react";

export default function ContactSection() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function newBtn() {
    setIsDisplayed((prevState) => !prevState);
  }

  return (
    <section className="section-background-inverse" id="contact-me">
      <h2 className="section-header">Contact Me</h2>
      <div
        style={{
          display: "flex",
          width: "600px",
          height: "200px",
          margin: "0 auto",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <div>
          <a href="https://www.linkedin.com/in/edelzamora/">
            <ImageTile url="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" />
          </a>
        </div>
      </div>
    </section>
  );
}
