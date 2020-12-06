import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSix from "../wrappers/header/HeaderSix";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutSeven = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <FooterOne spaceTopClass="pt-100" spaceBottomClass="pb-70" />
    </Fragment>
  );
};

export default LayoutSeven;

LayoutSeven.propTypes = {
  children: PropTypes.any
};
