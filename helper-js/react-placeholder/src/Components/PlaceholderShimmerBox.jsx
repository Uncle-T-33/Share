import React from "react";
import PropTypes from "prop-types";

const PlaceholderShimmerBox = (props) => {
  return (
    <div className={props.classes}>
      {/* Animated in App.css */}
      <div className="animated">{props.children}</div>
    </div>
  );
};

export default PlaceholderShimmerBox;

PlaceholderShimmerBox.propTypes = {
  classes: PropTypes.string,
};

PlaceholderShimmerBox.defaultProps = {
  classes: "",
};
