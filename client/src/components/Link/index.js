import React, { Component } from "react";
import "./style.css"
const Link = props => (

<div className="changeForm">
<a href={props.destination} className="linkText" >{props.text}</a>
</div>

)


export default Link;