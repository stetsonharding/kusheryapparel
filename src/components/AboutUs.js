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
             
The Kushery — Where Style Meets Cannabis Culture Our clothing isn't just apparel;
Please note: All apparel is for viewing purposes only. It is illegal to make in-store purchases for clothing. To place an order, you must qualify first. Email thekushery502@mail.com — we’ll gladly arrange a pickup or delivery with you.
Thank you for your understanding and continued support!
            </p>
            <ArrowPoint />
          </Col>
        </Row>
      </Container>
    </>
  );
}
