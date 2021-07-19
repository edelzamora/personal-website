import React from "react";

const ImageTile = (props) => {
  return (
    <div>
      <div className="image-tile">
        <img src={props.link}></img>
      </div>
    </div>
  );
};

export default ImageTile;
