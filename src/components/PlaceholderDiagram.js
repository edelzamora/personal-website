import React from "react";
import diagram from "../data_files/under-construction.jpg";

export default function PlaceholderDiagram() {
  return (
    <div>
      <img src={diagram} style={{ width: "60%", height: "auto" }}></img>
    </div>
  );
}
