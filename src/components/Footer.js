import React from "react";

import "../css/Footer.css";

import Container from "react-bootstrap/Container";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer wavy">
      <div>
        <p style={{ fontWeight: "bold" }}>
          Copyright © {year} The Kushery Apparel. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
}
