import React from "react";
import { useState } from "react";
import logoData from "../data_files/logosData";
import SmallImageTile from "./SmallImageTile";
import { useEffect, useRef } from "react";
import ResumeDiagram from "./ResumeDiagram";
import SiteDiagram from "./SiteDiagram";
import PlaceholderDiagram from "./PlaceholderDiagram";

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

  let diagram = <PlaceholderDiagram />;
  if (props.name === "Personal Website") {
    diagram = <SiteDiagram />;
  }
  if (props.name === "Cloud Resume Challenge") {
    diagram = <ResumeDiagram />;
  }

  const techTiles = logoData.logos.map((ele) => {
    if (props.tech.includes(ele.item)) {
      return <SmallImageTile url={ele.url} title={ele.title} />;
    }
  });

  const isAWSTilesRendered = props.aws.length
    ? {
        display: "block",
      }
    : {
        display: "none",
      };

  const awsTiles = logoData.aws.map((ele) => {
    if (props.aws.includes(ele.item)) {
      return (
        <div>
          <img className="img-tile" src={ele.url} alt={ele.item} />
          <p
            style={{ fontSize: "10px", margin: "0px", fontWeight: "bold" }}
          >{`${ele.item}`}</p>
        </div>
      );
    }
  });
  const InfoList = props.description.map((bullet) => {
    return <p className="description-text">{bullet}</p>;
  });

  return (
    <div className="project-tile-container">
      <h3 style={{ margin: "0" }}>{props.name}</h3>

      <div
        className="overlay"
        style={isDisplayed ? { display: "block" } : { display: "none" }}
      >
        <div ref={ref} className="modal">
          <div className="row">
            <div className="column" id="description">
              {InfoList}
            </div>
            <div className="diagram">{diagram}</div>

            <div className="column" id="tech">
              <div className="tiles-column" style={isAWSTilesRendered}>
                <h4 className="small-heading">AWS Services</h4>
                <div className="tiles">{awsTiles}</div>
              </div>

              <div className="tiles-column">
                <h4 className="small-heading">Tools & Tech</h4>
                <div className="tiles">{techTiles}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="overlay-btn-column">
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
