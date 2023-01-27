import React from "react";
import { useState } from "react";
import logoData from "../data_files/logosData";
import SmallImageTile from "./SmallImageTile";
import { useEffect, useRef } from "react";

export default function ProjectTile(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDisplayed(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
        <div ref={ref} className="modal">
          <div className="row">
            <div
              style={{
                textAlign: "justify",
                background: "lightblue",
              }}
              className="column"
            >
              <p className="description">{props.description}</p>
            </div>
            <div
              style={{
                background: "orange",
                width: "500px",
                padding: "20px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Diagram
            </div>

            <div className="column" style={{ background: "red" }}>
              <div
                className="row"
                style={{
                  background: "forestgreen",
                  flexDirection: "column",
                }}
              >
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
                <div>{awsTiles}</div>
              </div>

              <div
                className="row"
                style={{ background: "black", flexDirection: "column" }}
              >
                <h4
                  style={{
                    color: "#e2ae6c",
                    marginTop: "20px",
                    marginBottom: "0",
                  }}
                >
                  Tools & Tech
                </h4>
                <div
                  style={{
                    display: "flex",
                    margin: "0 auto",
                    flexWrap: "wrap",
                  }}
                >
                  {techTiles}
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "red" }}>
            <div
              className="column"
              style={{
                background: "lightgreen",
                alignItems: "center",
                justifyContent: "center",
                height: "50px",
              }}
            >
              <a className="overlay-btn" onClick={handleBtn}>
                Close
              </a>
            </div>
          </div>
        </div>
      </div>

      <a className="btn" onClick={handleBtn}>
        More Details
      </a>
    </div>
  );
}
