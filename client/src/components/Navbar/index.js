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
        <NavbarLink text={"sign up"} link={"/Signup"}/>
    </div>
    <div className="NavbarLink">
          <NavbarLink text={"login"} link={"/Login"}/>
    </div>
    {props.children}
  </div>
);

export default Navbar;
