import React from "react";
import Navbar from "../components/Navbar";
import NavbarLink from "../components/NavbarLink";

function Error404() {
  return (
      <div>
        <Navbar>
          <NavbarLink text={"home"} link={"/Browse"}/>
          <NavbarLink text={"download"} link={"/Download"}/>
          <NavbarLink text={"upload"} link={"/Upload"}/>
          <NavbarLink text={"sign up"} link={"/Signup"}/>
        </Navbar>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
      </div>
  );
}

export default Error404;
