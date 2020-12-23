import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "react-bootstrap/Container";
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

import "../../assets/scss/navigation.scss";
import ACFSlogo from "../../assets/images/acfs-3.png";

const Navigation: React.FC = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container fluid className="navigation header-sticky position-sticky">
        <Navbar expand="lg" variant="dark" className="navigation__navbar py-0">
          <Navbar.Brand className="navigation__brand" href="#home">
            <img src={ACFSlogo} alt="ACFS Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation__toggle" className="navigation__toggler" />
          <Navbar.Collapse
            id="navigation__toggle"
            className="justify-content-end"
          >
            <Nav className="navigation__list flex-xs-column">
              <Link to="/">Home</Link>
              <Link to="/donate" className="navigation__list--donate d-none">Donate</Link>
              <Link to="/apply">Apply</Link>
              <Link to="/store">Store</Link>
              <Link to="/pay-us">Pay Us</Link>
              <NavDropdown
                title="About Us"
                id="navigation__dropdown"
                className="navigation__droplist"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/announcement" key="1">
                  Announcement
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials" key="2">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us" key="3">About Us</NavDropdown.Item>
              </NavDropdown>
              <div className="navigation__social d-flex align-items-center justify-content-end">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/albertacomputers/">
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/CFS_Alberta">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/albertacomputersforschools/">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                  </li>
                </ul>
              </div>
            </Nav>
            <Button className="navigation__donate" size="lg">
              Donate
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </motion.div>
  );
};

export default Navigation;
