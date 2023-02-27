import React from "react";

import Card from "react-bootstrap/Card";

import "../css/Product.css";

export default function Product({ productItem }) {
  return (
    <Card style={{ width: "19rem", padding: "0" }} className="card-container">
      <Card.Img
        style={{
          height: productItem.name === "Womens Leggings" ? "270px" : "270px",
          width: productItem.name === "Womens Leggings" ? "170px" : "260px",
          margin: "0 auto",
        }}
        variant="top"
        src={productItem.img}
        alt=""
      />
      <Card.Body style={{ padding: "3px" }}>
        <Card.Text className="d-flex justify-content-center align-items-center product-price">
          ${productItem.price}
        </Card.Text>
        <Card.Title className="d-flex justify-content-center align-items-center product-name">
          {productItem.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
