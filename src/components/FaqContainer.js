import React from "react";
import FaqAccordion from "../components/FaqAccordion";
import Container from "react-bootstrap/Container";

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
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>FAQ's</h1>

      {FaqsData.map((product, index) => {
        return (
          <FaqAccordion
            question={product.question}
            answer={product.answer}
            index={index}
          />
        );
      })}
    </Container>
  );
}
