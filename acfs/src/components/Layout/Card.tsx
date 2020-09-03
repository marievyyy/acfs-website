import * as React from "react";
import Col from "react-bootstrap/Col";
import "../../assets/scss/card.scss";

interface CardProps {
  href?: string;
  link?: string;
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Col lg={3} md={6} sm={6}>
      <a href={props.link}>
        <div className="card text-center">
          <div className="card-icon">
            <span>
              <img alt={props.imageAlt} src={props.image} />
            </span>
          </div>
          <div className="card-body">
            <p>{props.title}</p>
            <p>{props.body}</p>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default Card;
