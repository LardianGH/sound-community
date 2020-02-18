import React from "react";
//import "./style.css";

const NavbarLink = props => (
  <div className="NavbarLink">
    <a href={props.link}>{props.text}</a>
  </div>
);

export default NavbarLink;
