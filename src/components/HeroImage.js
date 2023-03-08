import React from "react";
import heroImage from "../assets/HeroImage.png";

function HeroImage() {
  return (
    <div>
      <img
        src={heroImage}
        alt=""
        height="350"
        width="420"
        style={{ maxWidth: "100%", height: "auto", width: "auto/9" }}
      />
    </div>
  );
}

export default HeroImage;
