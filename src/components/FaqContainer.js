import React from "react";
import FaqAccordion from "../components/FaqAccordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaqsData } from "../FaqsData";

export default function FaqContainer() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#252525",
        height: "auto",
        minHeight: "500px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        className="text-center faq-heading"
        style={{
          color: "rgba(254,169,1,255)",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        FAQ's
      </h1>
      <Row style={{ minWidth: "50%" }}>
        <Col>
          {FaqsData.map((product, index) => {
            return (
              <FaqAccordion
                question={product.question}
                answer={product.answer}
                index={index}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
