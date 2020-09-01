import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import acfsLogo from "../../../assets/images/acfs-4.png";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xl={4}>
            <img className="d-block mb-5" src={acfsLogo} />
          </Col>
          <Col xl={4} md={6}>
            <h4 className="mb-4">Edmonton</h4>
            <p>
              8415 45 Street NW, Building B <br />
              Edmonton, AB T6B 2N5
            </p>
            <p>Phone: 780-452-8016</p>
            <p>E-Mail: edmonton.shop@cfsalberta.ca</p>
            <p>Supervisors: Dave Fladager and Ivy Porras</p>
            <p>Pick-Up and Drop-Off Time : 08:00 - 15:30</p>
          </Col>
          <Col xl={4} md={6}>
            <h4 className="mb-4 mobile">Calgary</h4>
            <p>
              Located at CBE Highfield <br /> 3610 9 St SE <br />
              Calgary, AB T2G 3C5
            </p>
            <p>Phone: 403-243-6321</p>
            <p>E-Mail: calgary.shop@cfsalberta.ca</p>
            <p>Supervisors: Jeff Thompson and Harvey Northfield</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
