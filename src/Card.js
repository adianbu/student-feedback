import React from "react";
import Feedback from "./Feedback.js";
import "./Card.css";
import { Avatar } from "@material-ui/core";

function Card({ src, name }) {
  return (
    <div className="card">
      {/* <img alt="" src={src} /> */}
      <Avatar alt={name} className="card__avatar" src="">
        {name[0]}
      </Avatar>
      <h2>{name}</h2>
      <Feedback />
    </div>
  );
}

export default Card;
