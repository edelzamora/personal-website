import React from "react";
import ImageTile from "./ImageTile";
import logoData from "../data_files/logosData";

export default function SkillSection() {
  const skillCards = logoData.logos.map((ele) => {
    return <ImageTile url={ele.url} title={ele.item} />;
  });

  return (
    <section className="section-background" id="skills">
      <h2 className="section-header">Skills & Tools</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "600px",
          margin: "0 auto",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {skillCards}
      </div>
    </section>
  );
}
