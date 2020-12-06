import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderThree from "../wrappers/header/HeaderThree";
import FooterThree from "../wrappers/footer/FooterThree";

const LayoutFour = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterThree spaceBottomClass="pb-70" />
    </Fragment>
  );
};

LayoutFour.propTypes = {
  children: PropTypes.any,
  footerBgClass: PropTypes.string
};

export default LayoutFour;
