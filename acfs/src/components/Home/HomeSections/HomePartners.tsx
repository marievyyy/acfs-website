import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePartners: React.FC = () => {
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

  const sliderSettings = {
    autoplay: true,
    autoPlaySpeed: 200,
    arrows: true,
    dots: false,
    infinite: true,
    mobileFirst: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      className="partners"
    >
      <Container className="partners-container">
        <Row className="partners-title">
          <Col xs={12} className="text-center">
            <h1 className="mb-5">Partners</h1>
            <p>
              The Computers for Schools Program could not exist without the
              support of a large number of government departments (Federal,
              Provincial and Municipal), private corporations, varied
              organizations, and individuals. We gratefully acknowledge the
              following supporters:
            </p>
          </Col>
        </Row>
        <Row>
          <Slider {...sliderSettings}>
            <div>
              <img src={require(`../../../assets/images/alberta-logo.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/ama.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/atb-financial.png`)} />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/canada-gov-logo.png`)}
              />
            </div>
            <div>
              <img src={require(`../../../assets/images/csc.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/google.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/ntl.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/husky-energy.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/imperial-oil.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/ised-logo.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/mawer.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/rcmp.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/scri.png`)} />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/statistic-canada.png`)}
              />
            </div>
            <div>
              <img src={require(`../../../assets/images/strathcona.jpg`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/telus.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/transalta.png`)} />
            </div>
            <div>
              <img src={require(`../../../assets/images/wipro.png`)} />
            </div>
          </Slider>
        </Row>
      </Container>
    </motion.div>
  );
};
export default HomePartners;
