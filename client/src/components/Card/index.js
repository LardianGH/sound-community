import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.soundSetup(props.sound)}>
      <img alt={props.name} src={props.image}/>
    </div>
    <div>
      <div className=""/>
    </div>
  </div>
);

export default Card;
