import React from "react";
import NavbarLink from "../NavbarLink";
import "./style.css";

const Navbar = props => (
  <div className="Navbar">
    <NavbarLink text={"home"} link={"/Browse"}/>
          <NavbarLink text={"download"} link={"/Download"}/>
          <NavbarLink text={"upload"} link={"/Upload"}/>
          <NavbarLink text={"sign up"} link={"/Signup"}/>
          <NavbarLink text={"login"} link={"/Login"}/>
    {props.children}
  </div>
);

export default Navbar;
