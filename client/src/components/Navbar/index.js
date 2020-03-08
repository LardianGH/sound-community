import React from "react";
import NavbarLink from "../NavbarLink";
import "./style.css";

const Navbar = props => (
  <div className="Navbar">
    <div className="NavbarLink">
        <NavbarLink text={"home"} link={"/Browse"}/>
    </div>
    <div className="NavbarLink">
        <NavbarLink text={"upload"} link={"/Upload"}/>
    </div>
    <div className="NavbarLink">
        <NavbarLink text={"signup"} link={"/Signup"}/>
    </div>
    <div className="NavbarLink">
          <NavbarLink text={"login"} link={"/Login"}/>
    </div>
    <div className="NavbarExtra">
    {props.children}
    </div>
  </div>
);

export default Navbar;
