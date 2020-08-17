import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./navigation.scss";
import ACFSlogo from "../../assets/images/acfs-3.png";

const Navigation: React.FC = () => {
  return (
    <Container fluid className="header-sticky position-sticky">
      <Navbar expand="lg" variant="dark" className="py-0">
        <Navbar.Brand href="#home">
          <img src={ACFSlogo} alt="ACFS Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="main-menu flex-xs-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Donate" className="donate-menu d-none">
              Donate
            </Nav.Link>
            <Nav.Link href="#Apply">Apply</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#Pay">Pay Us</Nav.Link>
            <NavDropdown
              title="About Us"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#action/3.1">
                Announcement
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
            </NavDropdown>
            <div className="header-social d-flex align-items-center justify-content-end">
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
          <Button className="donate" size="lg">
            Donate
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
