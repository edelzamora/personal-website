import React from "react";

export default function ImageTile(props) {
  return (
    <div
      style={{
        background: "white",
        margin: "10px 5px",
        borderRadius: "10px",
        boxShadow: "2px 4px black",
        padding: "5px",
      }}
    >
      <img
        style={{ maxWidth: "50px", height: "auto" }}
        src={props.url}
        alt={`${props.title} logo`}
      ></img>
    </div>
  );
}
