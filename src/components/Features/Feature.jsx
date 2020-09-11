import React from "react";
import PropTypes from "prop-types";

function Feature({ icon, header, text }) {
  return (
    <div className="features__card">
      <img src={icon} alt="Icon Feature" className="features__card-icon" />
      <h2 className="features__card-heading">{header}</h2>
      <p className="features__card-text">{text}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.elementType,
  header: PropTypes.string,
  text: PropTypes.string
};

export default Feature;
