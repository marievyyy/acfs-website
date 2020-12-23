import React, { useLayoutEffect} from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//  initial

// animate

// exit

const About: React.FC = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="about"
    >
      <div className="header header-1">
        <h1>About us</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <p>This is about us</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
