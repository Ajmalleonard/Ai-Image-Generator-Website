import React, { useState } from "react";
import hot from "../assets/hot.png";
import { Link } from "react-router-dom";
import "./stylnav.css";

const StyleNav = () => {
  const [selected, setSelected] = useState("popural");
  const fontsize = "13px";

  return (
    <div className="StyleNav">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
        onClick={() => setSelected("popural")}
      >
        <span>
          <img src={hot} alt="" />
        </span>
        POPURAL{selected === "popural" ? <hr /> : <></>}
      </Link>

      <Link
        onClick={() => setSelected("offer")}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
      >
        OFFER-SALE{selected === "offer" ? <hr /> : <></>}
      </Link>
      <Link
        onClick={() => setSelected("jewells")}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
      >
        JEWELLS{selected === "jewells" ? <hr /> : <></>}
      </Link>
      <Link
        onClick={() => setSelected("art")}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
      >
        ART{selected === "art" ? <hr /> : <></>}
      </Link>
      <Link
        onClick={() => setSelected("trendy")}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
      >
        TRENDY{selected === "trendy" ? <hr /> : <></>}
      </Link>
      <Link
        onClick={() => setSelected("culture")}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: fontsize,
        }}
      >
        CULTURE{selected === "culture" ? <hr /> : <></>}
      </Link>
    </div>
  );
};

export default StyleNav;
