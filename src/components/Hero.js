import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#ED820E",
        height: "700px",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <Row style={{ width: "100%", backgroundColor: "blue" }}>
        <Col
          className="d-flex justify-content-center align-items-center "
          style={{ backgroundColor: "red" }}
          sm={12}
          md={6}
        >
          Headline and button
        </Col>
        <Col
          style={{ backgroundColor: "green" }}
          className="d-flex justify-content-center align-items-center"
          sm={12}
          md={6}
        >
          Cannabis image
        </Col>
      </Row>
    </Container>
  );
}
