import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

import "../../assets/scss/apply.scss";
//  initial

// animate

// exit

const Apply: React.FC = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="apply"
    >
      <div className="apply__header header header-img">
        <h1>Apply for devices</h1>
      </div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="apply__notice">
              <p>
                <span>Notice:</span> Due to a large volume of incoming orders,
                wait times for all orders will extend beyond two weeks. We thank
                all our clients in advance for their patience.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="apply__details">
              <h2 className="mt-4 mb-5 font-weight-bold">Are you eligible?</h2>
              <p className="m-4"><span className="font-weight-bold">We do not give computers directly to individuals.</span> We are required to go through recognized and trusted organizations. Therefore, only eligible clients can apply for our computers.</p>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12}>
          <Table responsive bordered striped className="mt-5">
            <thead className="text-center">
              <tr>
                <th>Eligible Clients</th>
                <th>Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Private Schools</td>
                <td>Registered with the Department of Education</td>
              </tr>
              <tr>
                <td>Public Schools</td>
                <td>Grades K-12</td>
              </tr>
              <tr>
                <td>Public Libraries</td>
                <td>Registered with Public Library Services of the Province of Alberta</td>
              </tr>
              <tr>
                <td>First Nations Schools</td>
                <td>All eligible</td>
              </tr>
              <tr>
                <td>Non-Profit Organizations</td>
                <td>Charitable registration number</td>
              </tr>
              <tr>
                <td>Literacy Centres</td>
                <td>Registered with the Department of Education</td>
              </tr>
              <tr>
                <td>Adult Education Centres</td>
                <td>Registered with the Department of Education</td>
              </tr>
              <tr>
                <td>Homeschools	</td>
                <td>Registered with the Homeschooling Office under Alberta Education and a Family Registration Number</td>
              </tr>
            </tbody>

         </Table>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="apply__details">
              <h2 className="mt-4 mb-5 font-weight-bold">Before applying</h2>

              <div className="m-4">
              <p>Due to the severe shortage of equipment, <span className="font-weight-bold yellow">we have restricted the number of laptops and desktops available per order to 15.</span> In addition, we have restricted the number of laptops to 30 per calendar year for schools and 15 per calendar year for non profit organizations. Also we have limited non profit organizations to 45 desktops per calendar year.</p>
              </div>
              
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="apply__details">
              <h2 className="mt-4 mb-5 font-weight-bold">After applying</h2>

              <div className="m-4">
              <p>You will received an email confirmation with your order number with a format of E-1234. Once we finished processing your order<span className="font-weight-bold">*</span>, we will send an an email that your order is ready for pickup. <span className="font-weight-bold yellow">Clients must pick up all orders as we do not deliver.</span></p>
              
              <p><span className="font-weight-bold">*Estimated Order Completion time: </span> 12 weeks</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="m-5 d-flex justify-content-center">
            <Link to="/apply-form">
              <Button className="donate" size="lg">Apply now</Button>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Apply;
