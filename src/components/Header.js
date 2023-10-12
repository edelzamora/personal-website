import React from "react";
import Counter from "./Counter";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "100",
        padding: "0px",
        top: "0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50px",
          padding: "30px 0px",
          backgroundColor: "#22161c",
          color: "white",
          justifyContent: "space-around",
        }}
      >
        <h2>
          <a
            href="https://blog.edelzamora.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </h2>
        <h2>
          <a
            href="https://s3.amazonaws.com/edelzamora.tech/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </h2>
        <h2>
          <a href="#certifications">Certifications</a>
        </h2>
        <h2>
          <a href="#projects">Projects</a>
        </h2>
        <h2>
          <a href="#skills">Skills & Tools</a>
        </h2>
        <h2>
          <a href="#contact-me">Contact Me</a>
        </h2>
        <h2 id="counter">
          <a>Visitor Number:</a>
          <Counter />
        </h2>
      </div>
    </header>
  );
}
