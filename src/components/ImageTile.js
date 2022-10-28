import React from "react";

export default function ImageTile(props) {
  return (
    <div
      style={{
        background: "#f2f1ef",
        margin: "10px 5px",
        borderRadius: "10px",
        boxShadow: "5px 10px black",
        padding: "5px",
      }}
    >
      <img src={props.url} alt={`${props.title} logo`}></img>
    </div>
  );
}
