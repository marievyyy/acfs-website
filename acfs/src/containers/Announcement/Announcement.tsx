import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../assets/scss/announcement.scss";

export default class Announcement extends Component<{}> {

  componentDidMount() {
      window.scrollTo(0,0)
  }

  render() {
      return (
          <div className="announcement">
              <div className="applyForm__header header header-2">
                  <h1>Order Form</h1>
              </div>
          <Container>
              <Row>
                  <Col>
                      <p>Announcement</p>
                  </Col>
              </Row>
          </Container>
          </div>
      )
  }
}