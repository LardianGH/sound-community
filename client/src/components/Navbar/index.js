import React from "react";
import "./style.css"
import Searchbar from "../Searchbar"

function Navbar(props) {
  return (

    <body className="superNav">
        <div className="navText">
        {props.children}
        </div>
        <div className="searchBox">
        <div className="searchText">
                Search
            </div>
        </div>
        </body>

  );
}

export default Navbar;