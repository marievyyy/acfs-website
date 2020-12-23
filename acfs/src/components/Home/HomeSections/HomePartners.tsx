import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePartners: React.FC = () => {
  const animation = useAnimation();
  const [partnersRef, inView] = useInView({
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
      ref={partnersRef}
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
      className="home__partners"
    >
      <Container className="h-partners__container">
        <Row className="h-partners__title">
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
              <img
                src={require(`../../../assets/images/alberta-logo.png`)}
                alt="Alberta Government"
              />
            </div>
            <div>
              <img src={require(`../../../assets/images/ama.png`)} alt="AMA" />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/atb-financial.png`)}
                alt="ATB Financial"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/canada-gov-logo.png`)}
                alt="Government of Canada"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/csc.png`)}
                alt="Correctional Services Canada"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/google.png`)}
                alt="Google"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/ntl.png`)}
                alt="National Trust for Canada"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/husky-energy.png`)}
                alt="Husky Energy"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/imperial-oil.png`)}
                alt="Imperial Oil"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/ised-logo.png`)}
                alt="ISED"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/mawer.png`)}
                alt="Mawer"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/rcmp.png`)}
                alt="Royal Canadian Mounted Police"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/scri.png`)}
                alt="Shanked Computer Recycling Inc"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/statistic-canada.png`)}
                alt="Statistic Canada"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/strathcona.jpg`)}
                alt="Strathcona"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/telus.png`)}
                alt="Telus"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/transalta.png`)}
                alt="Transalta"
              />
            </div>
            <div>
              <img
                src={require(`../../../assets/images/wipro.png`)}
                alt="Wipro"
              />
            </div>
          </Slider>
        </Row>
      </Container>
    </motion.div>
  );
};
export default HomePartners;
