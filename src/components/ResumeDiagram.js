import React from "react";
import diagram from "../data_files/cloud-resume.png";

export default function ResumeDiagram() {
  return (
    <div>
      <img
        id="resume-diagram"
        src={diagram}
        style={{ width: "100%", maxWidth: "90%", height: "auto" }}
      ></img>
    </div>
  );
}
