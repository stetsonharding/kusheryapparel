import React from "react";

import "../css/AboutUs.css";

import ArrowPoint from "./ArrowPoint";

export default function AboutUs() {
  return (
    <>
      <div className="about-container wavy-top">
        <div className="half-circle"></div>
        <div className="about">
          <h1>WHO WE ARE</h1>
          <p className="lead">
            The Kushery is a cannabis clothing brand that celebrates the culture
            and community surrounding this incredible plant. Our high-quality
            apparel is designed to reflect the passion and pride that cannabis
            enthusiasts feel, while also offering comfort and style. Whether
            you're a seasoned smoker or simply appreciate the aesthetic of
            cannabis culture, The Kushery has something for you. We're committed
            to promoting inclusivity and acceptance within the cannabis
            community, and we believe that our clothing can help to break down
            stereotypes and promote positive change. Join us in celebrating the
            amazing world of cannabis with The Kushery.
          </p>
          <ArrowPoint />
        </div>
      </div>
    </>
  );
}
