import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="main-navbar">
          <HashLink smooth to="/#about" className="nav-element-about">
            {" "}
            About{" "}
          </HashLink>
          <HashLink smooth to="/#project" className="nav-element-projects">
            {" "}
            Projects{" "}
          </HashLink>
          <HashLink smooth to="/#contact" className="nav-element-resume">
            {" "}
            Contact{" "}
          </HashLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
