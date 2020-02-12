import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.soundSetup(props.sound)} /* When you click a card, call soundSetup() in browse.js*/ >
      
      <img alt={props.name} src={props.image}/>
    </div>
    <div>
      <div className="content">
         <div>{props.name}</div> 
         <div> <a href={props.sound} download={props.name}>Download</a> </div> 
      </div>
    </div>
  </div>
);

export default Card;
