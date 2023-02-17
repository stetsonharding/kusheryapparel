import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

//IMporting The Kushery Logo
import Logo from "../assets/Logo.png";
//Importing Nav css file
import "../css/Nav.css";

function Nav() {
  return (
    <>
      <Navbar
        sticky="top"
        variant="dark"
        style={{ backgroundColor: "#ED820E" }}
      >
        <Container fluid className="m-2">
          <Navbar.Brand>
            <img className="logo" alt="" src={Logo} width="45" height="35" />{" "}
          </Navbar.Brand>
          <Navbar.Brand
            className="nav-brand"
            style={{
              color: "green",
              fontSize: "26px",
              letterSpacing: "1px",
            }}
          >
            The Kushery Apparel
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
