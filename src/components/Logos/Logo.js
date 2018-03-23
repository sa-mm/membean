import React from "react";
import PropTypes from "prop-types";

const Logo = props => {
  const { svg, hex } = props;
  const renderChildren = (children, hex) => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        fill: hex
      });
    });
  };

  return (
    <svg {...svg.props} width={224}>
      {renderChildren(svg.props.children, hex)}
    </svg>
  );
};

Logo.propTypes = {
  svg: PropTypes.element.isRequired,
  hex: PropTypes.string
};

export default Logo;
