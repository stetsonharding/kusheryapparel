import React from "react";

import { ArcherContainer, ArcherElement } from "react-archer";

export default function ArrowPoint() {
  const boxStyle = {
    // display: "flex",
    // flexDirection: "column",
  };
  const rowStyle = {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
  };

  const processHeading = {
    padding: "0",
    margin: "0",
    color: "white",
    letterSpacing: "1px",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  return (
    <div style={{ margin: "50px" }}>
      <ArcherContainer strokeColor="red">
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
            <div style={boxStyle}>
              <img src="https://img.icons8.com/nolan/64/shirt.png" alt="" />
              <p style={processHeading}>Find Product</p>
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
            <div style={boxStyle}>
              <img
                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/pickup-point.png"
                alt=""
              />
              <p style={processHeading}>Pick up</p>
            </div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div style={boxStyle}>
              <img
                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/take-it-easy.png"
                alt=""
              />
              <p style={processHeading}>Enjoy</p>
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
}
