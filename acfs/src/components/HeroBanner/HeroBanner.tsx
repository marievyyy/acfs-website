import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero-container d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col xl={6} lg={6} md={8} sm={10}>
            <div className="hero__caption">
              <h1 data-animation="fadeInUp" data-delay=".6s">
                Providing Essential <br />
                Learning Tools
              </h1>
              <p data-animation="fadeInUp" data-delay=".8s">
                In today's digital-learning environment, computers are a
                necessity. ACFS provides about 10,000 computers per year to
                schools, libraries, not-for-profit organizations and Indigenous
                communities throughout Alberta.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
