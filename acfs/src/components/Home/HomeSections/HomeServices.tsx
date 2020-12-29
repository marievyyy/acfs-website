import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import Card from "../../Layout/Card";

const HomeServices: React.FC = () => {
  const animation = useAnimation();
  const [cardRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const cardChild = {
    visible: {
      width: "100%",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
        staggerChildren: 15,
      },
    },
    hidden: {
      width: 0,
      scale: 1.2,
    },
  };

  return (
    <motion.div
      ref={cardRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
            staggerChildren: 0.2,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
      className="home__services"
    >
      <Container fluid className="h-services__container">
        <Row>
          <Col xl={3} md={6} xs={12}>
            <motion.div className="h-services__item" variants={cardChild}>
              <Card link="/apply" title="Apply for computers" imageBg="apply" />
            </motion.div>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <motion.div className="h-services__item" variants={cardChild}>
              <Card link="/donate" title="Donate" imageBg="donate" />
            </motion.div>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <motion.div className="h-services__item" variants={cardChild}>
              <Card link="/work" title="Work Experience" imageBg="internship" />
            </motion.div>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <motion.div className="h-services__item" variants={cardChild}>
              <Card link="/recycle" title="Recycle" imageBg="recycle" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default HomeServices;
