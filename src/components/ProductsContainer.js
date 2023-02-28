import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

import { ApparelData } from "../ApparelData";
import Product from "./Product";

export default function ProductsContainer({ scrollToProducts }) {
  return (
    <Container
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
      ref={scrollToProducts}
    >
      <div>
        <h2
          style={{
            color: "rgba(254,169,1,255)",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          Newest Products
        </h2>
      </div>
      <Row className="d-flex justify-content-center align-items-center">
        {ApparelData.map((productItem) => {
          return <Product productItem={productItem} />;
        })}
      </Row>
    </Container>
  );
}
