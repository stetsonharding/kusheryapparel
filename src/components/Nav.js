import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

//IMporting The Kushery Logo
import Logo from "../assets/Logo.png";
//Importing Nav css file
import "../css/Nav.css";

function Nav() {
  const [navBar, setNavbar] = useState(false);

  //Function to change navbar background on scollY
  const changeBackground = () => {
    if (window.scrollY >= 70) setNavbar(true);
    if (window.scrollY === 0) setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  // ==

  return (
    <>
      <Navbar
        sticky="top"
        variant="dark"
        className={navBar ? "active" : "navbar"}
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
