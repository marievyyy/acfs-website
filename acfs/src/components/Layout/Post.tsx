import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../assets/scss/post.scss";

const Post: React.FC = () => {
  return (
    <div className="post">
      <Container>
        <Row>
          <Col lg={2} className="post__date">
            <h1>22</h1>
            <h5>Aug</h5>
          </Col>
          <Col lg={10} className="post__content">
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
      </Container>
    </div>
  );
};

export default Post;
