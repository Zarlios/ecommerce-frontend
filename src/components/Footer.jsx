import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark border-bottom border-body text-white" data-bs-theme="dark">
      <Container fluid className="p-5">
        <div className="text-lg-start">
          <Row>
            <Col>
              <h1>Designing and Developing full stack applications</h1>
              <p>Developed and designed by Matthew Hoepfl</p>
            </Col>
            <Col>
              <Row className="justify-content-center">
                <Col md="auto">
                  <div>
                    <NavLink className="nav-link text-white" to="https://github.com/Zarlios">
                      <i className="fab fa-github"></i>
                    </NavLink>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <NavLink className="nav-link text-white" to="https://www.facebook.com/mdh0588/">
                      <i className="fab fa-facebook"></i>
                    </NavLink>
                  </div>
                </Col>
                <Col md="auto">
                  <div id="img">
                    <NavLink className="nav-link text-white" to="https://www.instagram.com/mdh0588/">
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </div>
                </Col>
                <Col md="auto">
                  <div id="img">
                    <NavLink className="nav-link text-white" to="https://www.linkedin.com/in/matthew-hoepfl/">
                      <i className="fab fa-linkedin"></i>
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col id="container">
              <div className="text-lg-end">
                <ul className="nav flex-column">
                  <li className="nav-item mx-3">
                    <NavLink className="nav-link text-white" to="/apparel">
                      Apparel
                    </NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink className="nav-link text-white" to="/collectibles">
                      Collectibles
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
