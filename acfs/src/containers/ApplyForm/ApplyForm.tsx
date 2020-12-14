import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "../../assets/scss/applyForm.scss";

export default class ApplyForm extends Component<{}> {

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="applyForm">
                <div className="applyForm__header header header-2">
                    <h1>Order Form</h1>
                </div>
            <Container>
                <Row>
                    <Col>
                        <Form>

                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}