import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import CountUp from "react-countup";

import Card from "../Layout/Card/Card";

import checklist from "../../assets/images/checklist.svg";
import donate from "../../assets/images/donation.svg";
import volunteer from "../../assets/images/group.svg";
import volunteer2 from "../../assets/images/volunteer.svg";
import recycle from "../../assets/images/light-bulb.svg";
import whyDonate from "../../assets/images/undraw_deliveries.svg";
import pc from "../../assets/images/pc.svg";

import "../../assets/scss/home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* home banner */}
      <div className="hero-banner d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={8} sm={10}>
              <div className="hero__caption">
                <h1 data-animation="fadeInUp" data-delay=".6s">
                  Providing Essential <br />
                  Learning Tools
                </h1>
                <p data-animation="fadeInUp" data-delay=".8s">
                  In today's digital-learning environment, computers are a
                  necessity. ACFS provides about 10,000 computers per year to
                  schools, libraries, not-for-profit organizations and
                  Indigenous communities throughout Alberta.
                </p>
              </div>
            </Col>
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
            <Col xl={{ span: 7, offset: 6 }} lg={6} md={8} sm={10}>
              <h1 className="mb-5">Why donate your old computer?</h1>
              <div className="purpose-1 mb-5">
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon color="white" icon={faHeart} size="lg" />
                  <h5 className="pl-3 mb-0">Help Albertans</h5>
                </div>
                <p>
                  Donating your old computers helps low-income families,
                  non-profit organizations and schools. Serving our community
                  helps us bridge the digital divide and plans to meet social
                  distancing requirements in order to slow the spread of
                  COVID-19.
                </p>
              </div>
              <div className="purpose-2 mb-5">
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon color="white" icon={faThumbsUp} size="lg" />
                  <h5 className="pl-3 mb-0">Make a difference</h5>
                </div>
                <p>
                  Donating your old computers helps low-income families,
                  non-profit organizations and schools. Serving our community
                  helps us bridge the digital divide and plans to meet social
                  distancing requirements in order to slow the spread of
                  COVID-19.
                </p>
              </div>
              <div className="purpose-3">
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon color="white" icon={faTrashAlt} size="lg" />
                  <h5 className="pl-3 mb-0">Environmental friendly</h5>
                </div>
                <p className="mb-0">
                  Donating your old computers helps low-income families,
                  non-profit organizations and schools. Serving our community
                  helps us bridge the digital divide and plans to meet social
                  distancing requirements in order to slow the spread of
                  COVID-19.
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
                    <CountUp end={350} separator="," duration={5} /> +
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
    </div>
  );
};

export default Home;
