import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ApparelData } from "../ApparelData";
import Product from "./Product";

export default function ProductsContainer() {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Row className="d-flex justify-content-center align-items-center">
        {ApparelData.map((productItem) => {
          return <Product productItem={productItem} />;
        })}
      </Row>
    </Container>
  );
}
