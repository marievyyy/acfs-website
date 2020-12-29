import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logoAlberta from "../../../assets/images/alberta-logo.png";
import logoAMA from "../../../assets/images/ama.png";
import logoATB from "../../../assets/images/atb-financial.png";
import logoCanada from "../../../assets/images/canada-gov-logo.png";
import logoCSC from "../../../assets/images/csc.png";
import logoGoogle from "../../../assets/images/google.png";
import logoNTL from "../../../assets/images/ntl.png";
import logoHuskyEnergy from "../../../assets/images/husky-energy.png";
import logoImperialOil from "../../../assets/images/imperial-oil.png";
import logoISED from "../../../assets/images/ised-logo.png";
import logoMawer from "../../../assets/images/mawer.png";
import logoRCMP from "../../../assets/images/rcmp.png";
import logoSCRI from "../../../assets/images/scri.png";
import logoStatisticCanada from "../../../assets/images/statistic-canada.png";
import logoStrathcona from "../../../assets/images/strathcona.jpg";
import logoTELUS from "../../../assets/images/telus.png";
import logoTransAlta from "../../../assets/images/transalta.png";
import logoWipro from "../../../assets/images/wipro.png";

const HomePartners: React.FC = () => {
  const animation = useAnimation();
  const [partnersRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
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
                src={logoAlberta}
                alt="Alberta Government"
              />
            </div>
            <div>
              <img src={logoAMA} alt="AMA" />
            </div>
            <div>
              <img
                src={logoATB}
                alt="ATB Financial"
              />
            </div>
            <div>
              <img
                src={logoCanada}
                alt="Government of Canada"
              />
            </div>
            <div>
              <img
                src={logoCSC}
                alt="Correctional Services Canada"
              />
            </div>
            <div>
              <img
                src={logoGoogle}
                alt="Google"
              />
            </div>
            <div>
              <img
                src={logoNTL}
                alt="National Trust for Canada"
              />
            </div>
            <div>
              <img
                src={logoHuskyEnergy}
                alt="Husky Energy"
              />
            </div>
            <div>
              <img
                src={logoImperialOil}
                alt="Imperial Oil"
              />
            </div>
            <div>
              <img
                src={logoISED}
                alt="ISED"
              />
            </div>
            <div>
              <img
                src={logoMawer}
                alt="Mawer"
              />
            </div>
            <div>
              <img
                src={logoRCMP}
                alt="Royal Canadian Mounted Police"
              />
            </div>
            <div>
              <img
                src={logoSCRI}
                alt="Shanked Computer Recycling Inc"
              />
            </div>
            <div>
              <img
                src={logoStatisticCanada}
                alt="Statistic Canada"
              />
            </div>
            <div>
              <img
                src={logoStrathcona}
                alt="Strathcona"
              />
            </div>
            <div>
              <img
                src={logoTELUS}
                alt="Telus"
              />
            </div>
            <div>
              <img
                src={logoTransAlta}
                alt="Transalta"
              />
            </div>
            <div>
              <img
                src={logoWipro}
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
