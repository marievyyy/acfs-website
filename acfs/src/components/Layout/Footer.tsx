import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import acfsLogo from "../../assets/images/acfs-4.png";

import "../../assets/scss/footer.scss";

const Footer: React.FC = () => {
  const animation = useAnimation();

  const [parent, inView] = useInView({
    rootMargin: "-200px",
    triggerOnce: true,
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
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 90,
    },
  };

  return (
    <div className="footer">
      <Container>
        <motion.div
          ref={parent}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
                staggerChildren: 0.4,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <Row>
            <Col xl={4}>
              <img className="d-block mb-5" src={acfsLogo} alt="ACFS Logo" />
            </Col>
            <Col xl={4} md={6}>
              <motion.div variants={child}>
                <h4 className="mb-4">Edmonton</h4>
                <p>
                  8415 45 Street NW, Building B <br />
                  Edmonton, AB T6B 2N5
                </p>
                <p>Phone: 780-452-8016</p>
                <p>E-Mail: edmonton.shop@cfsalberta.ca</p>
                <p>Supervisors: Dave Fladager and Ivy Porras</p>
                <p>Pick-Up and Drop-Off Time : 08:00 - 15:30</p>
              </motion.div>
            </Col>
            <Col xl={4} md={6}>
              <motion.div variants={child}>
                <h4 className="mb-4 mobile">Calgary</h4>
                <p>
                  Located at CBE Highfield <br /> 3610 9 St SE <br />
                  Calgary, AB T2G 3C5
                </p>
                <p>Phone: 403-243-6321</p>
                <p>E-Mail: calgary.shop@cfsalberta.ca</p>
                <p>Supervisors: Jeff Thompson and Harvey Northfield</p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Footer;
