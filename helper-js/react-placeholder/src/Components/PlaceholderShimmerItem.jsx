import React from "react";
import PropTypes from "prop-types";

const PlaceholderShimmerItem = (props) => {
  /* Animated in App.css */
  return <div className={`animated ${props.classes}`}>{props.children}</div>;
};

export default PlaceholderShimmerItem;

PlaceholderShimmerItem.propTypes = {
  classes: PropTypes.string,
};

PlaceholderShimmerItem.defaultProps = {
  classes: "",
};
