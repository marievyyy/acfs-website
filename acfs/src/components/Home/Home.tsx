import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CountUp from "react-countup";
import Slider from "react-slick";
import { ReactComponent as RightArrow } from "../../assets/images/arrow-right.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../Layout/Card";
import Post from "../Layout/Post";

import heroImage from "../../assets/images/slider-5.jpg";
import checklist from "../../assets/images/checklist.svg";
import donate from "../../assets/images/donation.svg";
import volunteer from "../../assets/images/group.svg";
import recycle from "../../assets/images/light-bulb.svg";

import volunteer2 from "../../assets/images/volunteer.svg";
import heart from "../../assets/images/heart-yellow.svg";
import work from "../../assets/images/work-yellow.svg";
import ecoFriendly from "../../assets/images/eco-friendly-yellow.svg";
import pc from "../../assets/images/pc.svg";
import ISEDlogo from "../../assets/images/ised.png";
import CanadaLogo from "../../assets/images/canada.png";
import AlbertaLogo from "../../assets/images/alberta.png";

// partners list
import alberta from "../../assets/images/alberta-logo.png";
import ama from "../../assets/images/ama.png";
import atb from "../../assets/images/atb-financial.png";
import canadaGov from "../../assets/images/canada-gov-logo.png";
import csc from "../../assets/images/csc.png";
import google from "../../assets/images/google.png";
import huskyEnergy from "../../assets/images/husky-energy.png";
import imperialOil from "../../assets/images/imperial-oil.png";
import ised from "../../assets/images/ised-logo.png";
import mawer from "../../assets/images/mawer.png";
import ntl from "../../assets/images/ntl.png";
import rcmp from "../../assets/images/rcmp.png";
import scri from "../../assets/images/scri.png";
import statistic from "../../assets/images/statistic-canada.png";
import strathcona from "../../assets/images/strathcona.jpg";
import telus from "../../assets/images/telus.png";
import transalta from "../../assets/images/transalta.png";
import wipro from "../../assets/images/wipro.png";

import "../../assets/scss/home.scss";

const settings = {
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

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* home banner */}
      <div className="hero-banner d-flex align-items-center justify-content-center">
        <Container className="hero__container">
          <Row>
            <Col xl={6} lg={6} md={8} sm={12}>
              <div className="hero__caption">
                <h1>
                  Providing Essential <br />
                  Learning Tools
                </h1>
                <p>
                  In today's digital-learning environment, computers are a
                  necessity. ACFS provides about 10,000 computers per year to
                  schools, libraries, not-for-profit organizations and
                  Indigenous communities throughout Alberta.
                </p>
                <div className="btn-row">
                  <a href="/" className="d-flex align-items-center">
                    Apply now <RightArrow />
                  </a>
                </div>
              </div>
            </Col>
            <div className="hero__image">
              <img src={heroImage} />
            </div>
          </Row>
        </Container>
      </div>
      {/* services */}
      <div className="services">
        <Container>
          <Row>
            <Card
              link="#Apply"
              title="Apply for computers"
              image={checklist}
              imageAlt="apply"
            />
            <Card
              link="#Donate"
              title="Donate"
              image={donate}
              imageAlt="donate"
            />
            <Card
              link="#Work"
              title="Work Experience"
              image={volunteer}
              imageAlt="work experience"
            />
            <Card
              link="#Recycle"
              title="Recycle"
              image={recycle}
              imageAlt="recycle"
            />
          </Row>
        </Container>
      </div>
      {/* why donate */}
      <div className="why-donate d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xl={{ span: 7, offset: 6 }} md={12}>
              <h1 className="mb-5">Why donate your old computer?</h1>
              <div className="purpose-1 mb-5">
                <div className="d-flex align-items-center mb-4">
                  <img src={heart} alt="heart" />
                  <h5 className="pl-3 mb-0">Digital Access for Albertans</h5>
                </div>
                <p>
                  Donating your old computers helps schools, libraries,
                  not-profit organizations, Indigenous communities, new
                  Canadians, low-income Canadians and seniors. Serving our
                  community helps us bridge the digital divide.
                </p>
              </div>
              <div className="purpose-2 mb-5">
                <div className="d-flex align-items-center mb-4">
                  <img src={work} alt="intern" />
                  <h5 className="pl-3 mb-0">
                    Training for the skills of tomorrow
                  </h5>
                </div>
                <p>
                  The Technical Work Experience Program (TWEP) employs young
                  Canadians giving them hands-on experience and the digital
                  skills needed to enter the workplace. This program exist
                  because of your generous donations.
                </p>
              </div>
              <div className="purpose-3">
                <div className="d-flex align-items-center mb-4">
                  <img src={ecoFriendly} alt="eco friendly" />
                  <h5 className="pl-3 mb-0">Keeping the future green</h5>
                </div>
                <p className="mb-0">
                  Providing Canadians with access to computers also has a
                  positive impact on the environment. Refurbishing equipment
                  saves 20x more energy than recycling.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* counter */}
      <div className="counter">
        <Container>
          <Row>
            <Col lg={4} className="counter-1">
              <Row>
                <Col lg={3}>
                  <img src={donate} alt="computers donated" />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp end={27100} separator="," duration={8} /> +
                  </h1>
                  <h3>Computers donated</h3>
                  <p>From our federal government, corporates and individuals</p>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="counter-1">
              <Row>
                <Col lg={3}>
                  <img src={volunteer2} alt="volunteer" />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp end={350} separator="," duration={10} /> +
                  </h1>
                  <h3>Volunteers</h3>
                  <p>
                    That test, clean and refurbish equipment as part of our work
                    experience program.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="counter-1">
              <Row>
                <Col lg={3}>
                  <img src={pc} alt="desktop" />
                </Col>
                <Col lg={9}>
                  <h1>
                    <CountUp end={22300} separator="," duration={8} /> +
                  </h1>
                  <h3>Refurbished computers</h3>
                  <p>
                    Donated to schools, non-profits, churches, libraries and
                    etc.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* announcement */}
      <div className="announcement">
        <Container className="announcement-container">
          <Row className="announcement-title">
            <Col className="text-center">
              <h6 className="mb-4"> Our recent news</h6>
              <h1 className="mb-5">ANNOUNCEMENT</h1>
            </Col>
          </Row>
          <Row className="announcement-post">
            <Post />
            <Col>
              <div className="d-flex more">
                <Button size="sm">More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* partners */}
      <div className="partners">
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
            <Slider {...settings}>
              <div>
                <img src={alberta} />
              </div>
              <div>
                <img src={ama} />
              </div>
              <div>
                <img src={atb} />
              </div>
              <div>
                <img src={canadaGov} />
              </div>
              <div>
                <img src={csc} />
              </div>
              <div>
                <img src={google} />
              </div>
              <div>
                <img src={ntl} />
              </div>
              <div>
                <img src={huskyEnergy} />
              </div>
              <div>
                <img src={imperialOil} />
              </div>
              <div className="ised">
                <img src={ised} />
              </div>
              <div>
                <img src={mawer} />
              </div>
              <div>
                <img src={rcmp} />
              </div>
              <div>
                <img src={scri} />
              </div>
              <div>
                <img src={statistic} />
              </div>
              <div>
                <img src={strathcona} />
              </div>
              <div>
                <img src={telus} />
              </div>
              <div>
                <img src={transalta} />
              </div>
              <div>
                <img src={wipro} />
              </div>
            </Slider>
          </Row>
        </Container>
      </div>
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
              <img src={ISEDlogo} alt="ISED" />
            </a>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <a href="http://www.ic.gc.ca/eic/site/cfs-ope.nsf/eng/home">
              <img src={CanadaLogo} alt="Canada" />
            </a>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <a href="https://www.alberta.ca/index.aspx" className="text-center">
              <img src={AlbertaLogo} alt="Alberta" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
