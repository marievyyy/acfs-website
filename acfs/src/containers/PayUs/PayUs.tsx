import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../assets/scss/payUs.scss";

export default class PayUs extends Component<{}> {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="payUs">
        <div className="payUs__header header header-2">
          <h1>Pay Us</h1>
        </div>
        <Container>
          <Row>
            <Col>
              {/* <h1>This is a store</h1> */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}