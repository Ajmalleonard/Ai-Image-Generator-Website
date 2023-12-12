import React from "react";
import "./Hero.css";
import handicon from "../assets/hand_icon.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Let Hot Style Speak For You </h2>
        <div className="hand-icon">
          <img src={handicon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
