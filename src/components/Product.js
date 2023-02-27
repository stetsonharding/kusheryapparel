import React from "react";

import Card from "react-bootstrap/Card";

export default function Product({ productItem }) {
  return (
    <Card style={{ width: "18rem" }} className="d-grid gap-2">
      <Card.Img
        style={{ width: "250px", height: "230px" }}
        variant="top"
        src={productItem.img}
        alt=""
      />
      <Card.Body>
        <Card.Text className="d-flex justify-content-center align-items-center">
          {productItem.price}
        </Card.Text>
        <Card.Title className="d-flex justify-content-center align-items-center">
          {productItem.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
