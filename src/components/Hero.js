import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
export default function Hero() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#ED820E",
        height: "760px",
      }}
      className="d-flex justify-content-center align-items-center test"
    >
      <Row style={{ width: "80%" }}>
        <Col
          className="d-flex justify-content-center align-items-center "
          sm={12}
          md={6}
        >
          <HeroText />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          sm={12}
          md={6}
        >
          <HeroImage />
        </Col>
      </Row>
    </Container>
  );
}
