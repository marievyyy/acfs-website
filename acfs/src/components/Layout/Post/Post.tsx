import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./post.scss";

const Post: React.FC = () => {
  return (
    <div className="single-post">
      <Container>
        <Row>
          <Col xl={2} className="post-date">
            <h1>22</h1>
            <h5>Aug</h5>
          </Col>
          <Col xl={10} className="post-content">
            <p className="ml-3">
              IMPORTANT NOTICE: Due to the impact the spread of Coronavirus is
              having in Alberta, we will be prioritizing certain requests for
              our computers and related equipment. This may increase wait times
              for existing and future applications. We apologize for any
              inconvenience this may cause; however, we all need to adjust our
              behaviour and do what’s best for our community at large in these
              extraordinary times. Please be cautious and safe.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex more">
              <Button size="sm">More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Post;
