import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="main-navbar">
          {/* <div id="title-container">
          <h1 id="title">Edel Zamora</h1>
        </div> */}
          <a className="nav-element-about" href="/#/about">
            {" "}
            About{" "}
          </a>
          <a className="nav-element-projects" href="/#/project">
            {" "}
            Projects{" "}
          </a>
          <a className="nav-element-resume" href="/#/contact">
            {" "}
            Contact{" "}
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
