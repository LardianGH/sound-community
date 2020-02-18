import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    {props.children}
  </div>
);

export default Header;
