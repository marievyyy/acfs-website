import React, { useEffect } from "react";
import CountUp from "react-countup";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeCounter: React.FC = () => {
  const animation = useAnimation();

  const [counterRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: "-150px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.div
      ref={counterRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
            staggerChildren: 0.3,
          },
        },
        hidden: {
          y: 0,
          opacity: 0,
        },
      }}
      className="counter"
    >
      <Container>
        <Row>
          <Col lg={4} className="counter-1">
            <Row>
              <motion.div variants={child} className="d-flex">
                <Col lg={3}>
                  <img
                    src={require(`../../../assets/images/donation.svg`)}
                    alt="computers donated"
                  />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp
                      start={0}
                      end={inView ? 2600 : 0}
                      separator=","
                      duration={8}
                      useEasing={true}
                    />
                    +
                  </h1>
                  <h3>Computers donated</h3>
                  <p>From our federal government, corporates and individuals</p>
                </Col>
              </motion.div>
            </Row>
          </Col>
          <Col lg={4} className="counter-1">
            <Row>
              <motion.div variants={child} className="d-flex">
                <Col lg={3}>
                  <img
                    src={require(`../../../assets/images/volunteer.svg`)}
                    alt="volunteer"
                  />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp
                      start={0}
                      end={inView ? 200 : 0}
                      separator=","
                      duration={8}
                      useEasing={true}
                    />
                    +
                  </h1>
                  <h3>Volunteers</h3>
                  <p>
                    That test, clean and refurbish equipment as part of our work
                    experience program.
                  </p>
                </Col>
              </motion.div>
            </Row>
          </Col>
          <Col lg={4} className="counter-1">
            <Row>
              <motion.div variants={child} className="d-flex">
                <Col lg={3}>
                  <img
                    src={require(`../../../assets/images/pc.svg`)}
                    alt="desktop"
                  />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp
                      start={0}
                      end={inView ? 22300 : 0}
                      separator=","
                      duration={8}
                      useEasing={true}
                    />
                    +
                  </h1>
                  <h3>Refurbished computers</h3>
                  <p>
                    Donated to schools, non-profits, churches, libraries and
                    etc.
                  </p>
                </Col>
              </motion.div>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default HomeCounter;
