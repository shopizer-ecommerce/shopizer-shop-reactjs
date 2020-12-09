import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocalData } from '../../util/helper';
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass, merchant }) => {

  // const [merchant, setMerchant] = useState('');
  useEffect(() => {
    // console.log(getLocalData('store')
    // setMerchant(JSON.parse(getLocalData('store')))
  }, {})
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
        }`}
    >
      <div className="footer-logo">
        {
          merchant.logo != null &&
          <Link to={process.env.PUBLIC_URL + "/"}>
            <img alt="" src={merchant.logo.path} />
          </Link>
        }

      </div>
      <p>
        Copyright © {new Date(merchant.inBusinessSince).getFullYear()}{" "}
        <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          {merchant.name}
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};


const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(FooterCopyright));
// export default FooterCopyright;
