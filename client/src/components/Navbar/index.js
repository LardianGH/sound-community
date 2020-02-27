import React from "react";
import "./style.css";

const Navbar = props => (
  <div className="Navbar">
    {props.children}
  </div>
);

export default Navbar;
