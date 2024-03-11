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
             
The Kushery, where style meets cannabis culture. Our clothing isn't just apparel; it's a statement of sophistication and individuality. To ensure our brand remains exclusive, qualification is required for purchase. To begin the qualification process, please email us at {""} <span style={{fontWeight: 'bold'}}>thekusheryapparel@mail.com</span>. Join our community of individuals who appreciate the fusion of fashion and cannabis lifestyle.
            </p>
            <ArrowPoint />
          </Col>
        </Row>
      </Container>
    </>
  );
}
