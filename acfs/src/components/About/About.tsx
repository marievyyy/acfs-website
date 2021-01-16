import React, { useLayoutEffect} from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/scss/about.scss";

import aboutImage1 from "../../assets/images/slider-4.jpg";
import aboutImage2 from "../../assets/images/collaborate.jpg";
import plant from "../../assets/images/plant.png"

//  initial

// animate

// exit

const About: React.FC = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="about"
    >
      <div className="header header-1">
        <h1>About us</h1>
      </div>
      <Container className="about__contents">
        <Row>
          <Col xs={12}>
            <h1>Who we are?</h1>
          </Col>
          <Col md={8} xs={12}>
            <div className="about__who">
              <p><span>Computers for Schools Plus (CFS+)</span> is a national partnership-based program that refurbishes digital devices donated from government, private business and individuals for use by schools, libraries, not-for-profit organizations, Indigenous communities and eligible low-income individuals. This program is funded by the Government of Canada.</p>
              <p>
              Alberta Computers for Schools has registered refurbisher shops in Edmonton and Calgary. We receive financial support from Innovation, Science and Economic Development Canada (ISED). Since our beginning in 1994, ACFS has distributed more than 200,000 computers primarily to K-12 schools across Alberta. In 2020 alone we distributed more than 10,000 computers. We are a registered not for profit association under the Alberta Societies Act.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="about__images">
        <Row>
          <div>
            <img className="about__images-1" src={aboutImage1} alt="about_image1" />
            <img className="about__images-2" src={aboutImage2} alt="about_image2" />
          </div>
        </Row>
        <div className="about__difference">
          <Row>
            <Col xs={12}>
              <div className="difference__title">
                <h1 className="difference__title-mobile">Do We Make a Difference?</h1>
              </div>
            </Col>
          </Row>
          <Row className="difference__contents">
            <Col md={8} xs={12}>
              <p>
              We extend the useful life of thousands of computers and help to reduce the environmental footprint of the governments and industry. In the 2020 calendar year alone we shipped in excess of 300,000 pounds of computers and associated equipment for recycling. Our work means that some 450,000 pounds of additional material is diverted from the recycling stream each year. We work only with registered recycling companies and partners.
              </p>
              <p>
              The current service delivery model of ACFS offers governments, businesses and individuals an efficient and cost-effective way to extend the life of thousands of computers. Recipients tell us the computers we provide help to ensure all students have equity of access to teaching and learning opportunities and play an important role in helping to those students achieve success. ACFS also provides refurbished computers to other not for profit organizations and a host of other Albertans who for a variety of reasons do not have ready and reliable access to a computer. For these people ACFS provides an important tool that enables them to connect and enhance their lives.
              </p>
              <p>
              We are an effective model of cooperation between the Alberta Government, the Federal Government and the private sector.
              </p>
            </Col>
            <Col md={4}>
              <img src={plant} alt="plant"/>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="about__team">
        <Row>
          <Col xs={12}>
            <h1>Our Board of Directors</h1>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Cope, Kari</h3>
              <p>ex officio</p>
              <p>Executive Director</p>
              <p>Alberta Computers for Schools</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Plecash, Ross</h3>
              <p>Board Chair</p>
              <p>Engineering Governance Manager</p>
              <p>Enbridge Pipelines Inc.</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>O’Neil, Kevin</h3>
              <p>Principal</p>
              <p>Ballinlea Consulting</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Ginther, Don</h3>
              <p>Manager I.T Services</p>
              <p>First Nations Technical Services</p>
              <p>Advisory Group (TSAG)</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Anderson, Kerry</h3>
              <p>Secretary - Treasurer</p>
              <p>Library Consultant</p>
              <p>Alberta Municipal Affairs</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Obery, Jeremy</h3>
              <p>Account Executive</p>
              <p>Dell Canada</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Wittchen, Ed</h3>
              <p>Ed Wittchen Consulting</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Jones, Garrett</h3>
              <p>Account Manager</p>
              <p>Unified Computing Systems</p>
              <p>Cisco Systems – Alberta</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Allan, Gregor</h3>
              <p>Senior Account Manager</p>
              <p>VCE</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <h3>Sharma, Amit</h3>
              <p>Director, Information Services</p>
              <p>Internal IT</p>
              <p>Telus</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="mb-5">
              <h3>Martin, Robert</h3>
              <p>Assistant Superintendent</p>
              <p>Edmonton Catholic Schools</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
