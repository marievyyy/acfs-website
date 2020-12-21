import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// components
import Post from "../../Layout/Post";

const HomeAnnouncement: React.FC = () => {
  const animation = useAnimation();
  const [announcementRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="home__announcement"
      ref={announcementRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 100,
        },
      }}
    >
      <Container className="home__announcement--container">
        <Row className="home__announcement--title">
          <Col className="text-center">
            <h6 className="mb-4"> Our recent news</h6>
            <h1 className="mb-5">ANNOUNCEMENT</h1>
          </Col>
        </Row>
        <Row className="home__announcement--post">
          <Post />
          <Col>
            <div className="d-flex more">
              <Button size="sm">More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default HomeAnnouncement;
