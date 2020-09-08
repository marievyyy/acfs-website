import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeDonate: React.FC = () => {
  const animation = useAnimation();
  const [parent, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
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
    <motion.div
      ref={parent}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
            staggerChildren: 0.3,
          },
        },
        hidden: {
          y: 100,
          opacity: 0,
        },
      }}
      className="why-donate d-flex align-items-center justify-content-center"
    >
      <Container>
        <Row>
          <Col xl={{ span: 7, offset: 6 }} md={12}>
            <motion.h1 variants={child} className="mb-5">
              Why donate your old computer?
            </motion.h1>
            <motion.div variants={child} className="purpose-1 mb-5">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={require(`../../../assets/images/heart-yellow.svg`)}
                  alt="heart"
                />
                <h5 className="pl-3 mb-0">Digital Access for Albertans</h5>
              </div>
              <p>
                Donating your old computers helps schools, libraries, not-profit
                organizations, Indigenous communities, new Canadians, low-income
                Canadians and seniors. Serving our community helps us bridge the
                digital divide.
              </p>
            </motion.div>
            <motion.div variants={child} className="purpose-2 mb-5">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={require(`../../../assets/images/work-yellow.svg`)}
                  alt="intern"
                />
                <h5 className="pl-3 mb-0">
                  Training for the skills of tomorrow
                </h5>
              </div>
              <p>
                The Technical Work Experience Program (TWEP) employs young
                Canadians giving them hands-on experience and the digital skills
                needed to enter the workplace. This program exist because of
                your generous donations.
              </p>
            </motion.div>
            <motion.div variants={child} className="purpose-3">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={require(`../../../assets/images/eco-friendly-yellow.svg`)}
                  alt="eco friendly"
                />
                <h5 className="pl-3 mb-0">Keeping the future green</h5>
              </div>
              <p className="mb-0">
                Providing Canadians with access to computers also has a positive
                impact on the environment. Refurbishing equipment saves 20x more
                energy than recycling.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default HomeDonate;