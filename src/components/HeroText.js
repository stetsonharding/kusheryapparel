import React from "react";

import "../css/HeroText.css";

function HeroText() {
  return (
    <div>
      <div>
        <h1 className="hero-text">Shop our</h1>

        <h1 className="hero-text">Cannabis Clothing</h1>
      </div>
      <div className="hero-btn-container">
        <button className="view-products-btn">View Products</button>
      </div>
    </div>
  );
}

export default HeroText;
