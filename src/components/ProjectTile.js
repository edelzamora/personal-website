import React from "react";
import { useState } from "react";
import logoData from "../data_files/logosData";
import SmallImageTile from "./SmallImageTile";

export default function ProjectTile(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleBtn() {
    setIsDisplayed((prevState) => !prevState);
  }

  const techTiles = logoData.logos.map((ele) => {
    if (props.tech.includes(ele.item)) {
      return <SmallImageTile url={ele.url} title={ele.title} />;
    }
  });

  const awsTiles = logoData.aws.map((ele) => {
    if (props.aws.includes(ele.item)) {
      return (
        <div style={{ marginTop: "10px" }}>
          <img
            style={{
              width: "50px",
              margin: "0 5px",
              border: "solid 2px black",
              borderRadius: "5px",
            }}
            src={ele.url}
            alt={ele.item}
          />
          <p
            style={{ fontSize: "10px", margin: "0px", fontWeight: "bold" }}
          >{`${ele.item}`}</p>
        </div>
      );
    }
  });

  return (
    <div
      style={{
        background: "#f2f1ef",
        color: "black",
        padding: "50px",
        margin: "10px auto",
      }}
    >
      <h3 style={{ margin: "0" }}>{props.name}</h3>

      <div
        className="overlay"
        style={isDisplayed ? { display: "block" } : { display: "none" }}
      >
        <div className="modal">
          <p>{props.description}</p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4
              style={
                props.aws.length
                  ? {
                      margin: "0",
                      display: "block",
                      color: "#e2ae6c",
                    }
                  : { display: "none" }
              }
            >
              AWS Services
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {awsTiles}
            </div>

            <h4
              style={{ color: "#e2ae6c", marginTop: "20px", marginBottom: "0" }}
            >
              Tools & Tech
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "800px",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              {techTiles}
            </div>
          </div>

          <a className="btn" onClick={handleBtn}>
            Close
          </a>
        </div>
      </div>

      <a className="btn" onClick={handleBtn}>
        More Details
      </a>
    </div>
  );
}
