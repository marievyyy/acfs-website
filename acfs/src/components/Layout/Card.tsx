import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../../assets/scss/card.scss";

interface CardProps {
  link?: string;
  title?: string;
  imageBg?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const hoverTransition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <Link to={`${props.link}`}>
      <div className="card__container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={hoverTransition}
          className={`card__details ${props.imageBg}`}
        >
          <h2>{props.title}</h2>
        </motion.div>
      </div>
    </Link>
  )
}

export default Card;
