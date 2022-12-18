import React from "react";

export default function About() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "50px", marginTop: "200px" }}>
        Hello, my name{" "}
        <span
          style={{
            display: "block",
            color: "#e2ae6c",
            fontWeight: 900,
            fontSize: "60px",
          }}
        >
          Edel Zamora Garcia
        </span>
      </h1>
      <p>
        I am a student at Western Governors University. I am currently getting
        my Bachelor of Science in Cloud Computing and I am interested in cloud,
        platform, devops engineering roles. Other roles I am interested in is
        software development, software engineer and back-end engineering.
      </p>
    </div>
  );
}
