import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/AboutUs.css";

import ArrowPoint from "./ArrowPoint";

export default function AboutUs() {
  return (
    <>
      <Container fluid className="about-container wavy-top">
        <Row className="about d-flex justify-content-center align-items-center">
          <Col xl={8}>
            <Col>
              <h1>WHO WE ARE</h1>
            </Col>
            <p className="lead">
              The Kushery Apparel is a cannabis clothing brand that celebrates
              the culture and community surrounding this incredible plant. Our
              high-quality apparel is designed to reflect the passion and pride
              that cannabis enthusiasts feel, while also offering comfort and
              style. Whether you're a seasoned smoker or simply appreciate the
              aesthetic of cannabis culture, The Kushery Apparel has something
              for you. We're committed to promoting inclusivity and acceptance
              within the cannabis community, and we believe that our clothing
              can help to break down stereotypes and promote positive change.
              Join us in celebrating the amazing world of cannabis with The
              Kushery Apparel.
            </p>
            <ArrowPoint />
          </Col>
        </Row>
      </Container>
    </>
  );
}
