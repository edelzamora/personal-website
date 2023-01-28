import React from "react";
import diagram from "../data_files/cloud-resume.png";

export default function ResumeDiagram() {
  return (
    <div>
      <img src={diagram} style={{ width: "90%", height: "auto" }}></img>
    </div>
  );
}
