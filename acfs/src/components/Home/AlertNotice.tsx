import * as React from "react";
import Alert from "react-bootstrap/Alert";
import { motion } from "framer-motion";

const AlertNotice: React.FC = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -800, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="alert-container"
    >
      <Alert
        key={1}
        variant="danger"
        className="alert-heading text-center position-absolute w-100 rounded-0 py-3Y"
      >
        Due to the impact, the spread of Coronavirus is having in Alberta, we
        will be prioritizing certain requests for our computers and related
        equipment. This may increase wait times for existing and future
        applications.
      </Alert>
    </motion.div>
  );
};

export default AlertNotice;
