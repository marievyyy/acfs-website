import * as React from "react";
import Alert from "react-bootstrap/Alert";

const AlertNotice: React.FC = () => {
  return (
    <Alert
      key={1}
      variant="danger"
      className="alert-heading text-center position-absolute w-100 rounded-0 py-3Y"
    >
      Due to the impact, the spread of Coronavirus is having in Alberta, we will
      be prioritizing certain requests for our computers and related equipment.
      This may increase wait times for existing and future applications.
    </Alert>
  );
};

export default AlertNotice;
