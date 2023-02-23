import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AttributesData } from "../AttributesData.js";
import ClothingAttributes from "../components/ClothingAttributes";

export default function ClothingAttributesContainer() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#252525",
        height: "400px",
        position: "absolute",
        top: "800px",
        zIndex: -1,
      }}
    >
      <Row
        //className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#252525",
          height: "550px",
        }}
      >
        {AttributesData.map((item, index) => {
          return (
            <Col
              key={item.id}
              className="d-flex justify-content-center align-items-center"
            >
              <ClothingAttributes heading={item.heading} img={item.img} />

              <div
                style={{
                  color: "white",
                  height: "5px",
                  width: "25px",
                  backgroundColor: "green",
                }}
              ></div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
