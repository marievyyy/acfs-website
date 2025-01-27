import React, { Component } from "react";
import Post from "../../components/Layout/Post";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../assets/scss/announcement.scss";

export default class Announcement extends Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="announcement">
        <div className="header header-1">
          <h1>Announcements</h1>
        </div>
        <Container className="announcement__container">
          <Row>
            <Col>
              <Post />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
