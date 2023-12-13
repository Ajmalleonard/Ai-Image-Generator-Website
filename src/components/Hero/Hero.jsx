import React from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/revolve_banner.webp";

import { Container, Row, Col } from "react-bootstrap";
import handicon from "../assets/hand_icon.png";
import heroimg from "../assets/hero_image.png";
const Hero = () => {
  return (
    <Container fluid className="hero">
      <Container fluid className=" hero-holder">
        <img src={img} alt="" />
      </Container>
    </Container>
  );
};

export default Hero;
