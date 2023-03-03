import React from "react";

import { ArcherContainer, ArcherElement } from "react-archer";
import { Container } from "react-bootstrap";

export default function ArrowPoint() {
  const rowStyle = {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignitem: "center",
  };

  const processHeading = {
    padding: "0",
    margin: "0",
    color: "white",
    letterSpacing: "2px",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  return (
    <Container fluid style={{ marginTop: "20px", padding: "10px" }}>
      <ArcherContainer>
        <div style={rowStyle}>
          <ArcherElement
            id="element2"
            relations={[
              {
                targetId: "element3",
                targetAnchor: "left",
                sourceAnchor: "right",
                style: { strokeColor: "white", strokeWidth: 1 },
              },
            ]}
          >
            <div>
              <img src="https://img.icons8.com/nolan/64/shirt.png" alt="" />
              <p style={processHeading}>Find</p>
            </div>
          </ArcherElement>
          <ArcherElement
            id="element3"
            relations={[
              {
                targetId: "element4",
                targetAnchor: "left",
                sourceAnchor: "right",
                style: { strokeColor: "white", strokeWidth: 1 },
              },
            ]}
          >
            <div>
              <img
                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/pickup-point.png"
                alt=""
              />
              <p style={processHeading}>Pick up</p>
            </div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div>
              <img
                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/take-it-easy.png"
                alt=""
              />
              <p style={processHeading}>Enjoy</p>
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </Container>
  );
}
