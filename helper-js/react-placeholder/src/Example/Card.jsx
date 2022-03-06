import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="animated">
        <div className="img"></div>
      </div>
      <div className="animated margin">
        <div className="title"></div>
        <div className="space"></div>
        <div className="detail"></div>
      </div>
    </div>
  );
};

export default Card;
