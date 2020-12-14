import React from "react";
import { motion } from "framer-motion";

import AlertNotice from "../Home/AlertNotice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import HomeServices from "./HomeSections/HomeServices";
import HomeDonate from "./HomeSections/HomeDonate";
import HomeCounter from "./HomeSections/HomeCounter";
import HomeAnnouncement from "./HomeSections/HomeAnnouncement";
import HomePartners from "./HomeSections/HomePartners";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/scss/home.scss";

// images
import { ReactComponent as RightArrow } from "../../assets/images/arrow-right.svg";
import heroImage from "../../assets/images/slider-5.jpg";

const Home: React.FC = () => {
  const parent = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: { y: 800, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} className="home">
      <AlertNotice />
      {/* home banner */}
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="hero-banner d-flex align-items-center justify-content-center"
      >
        <Container className="hero__container">
          <Row className="hero__inner">
            <Col lg={6} md={8} sm={12}>
              <motion.div className="hero__caption">
                <motion.h1
                  variants={child}
                  className="hero__caption__stagger-1"
                >
                  Providing Essential <br />
                  Learning Tools
                </motion.h1>
                <motion.p variants={child} className="hero__caption__stagger-2">
                  In today's digital-learning environment, computers are a
                  necessity. ACFS provides about 10,000 computers per year to
                  schools, libraries, not-for-profit organizations and
                  Indigenous communities throughout Alberta.
                </motion.p>
                <motion.div
                  variants={child}
                  className="btn-row hero__caption__stagger-3"
                >
                  <a href="/apply" className="d-flex align-items-center">
                    Apply now <RightArrow />
                  </a>
                </motion.div>
              </motion.div>
            </Col>
            <div className="hero__image">
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 1200, opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="hero__image__inner"
              >
                <motion.img
                  animate={{ scale: 1 }}
                  initial={{ scale: 1.8 }}
                  transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                  src={heroImage}
                />
              </motion.div>
            </div>
          </Row>
        </Container>
      </motion.div>
      {/* services */}
      <HomeServices />
      {/* why donate */}
      <HomeDonate />
      {/* counter */}
      <HomeCounter />
      {/* announcement */}
      <HomeAnnouncement />
      {/* partners */}
      <HomePartners />
      {/* contributors */}
      <Container className="contributors">
        <Row>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <h4>Contributors</h4>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <a href="http://www.ic.gc.ca/eic/site/cfs-ope.nsf/eng/home">
              <img src={require(`../../assets/images/ised.png`)} alt="ISED" />
            </a>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <a href="http://www.ic.gc.ca/eic/site/cfs-ope.nsf/eng/home">
              <img
                src={require(`../../assets/images/canada.png`)}
                alt="Alberta"
              />
            </a>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <a href="https://www.alberta.ca/index.aspx" className="text-center">
              <img
                src={require(`../../assets/images/alberta.png`)}
                alt="Alberta"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
