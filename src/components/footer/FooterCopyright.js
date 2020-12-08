import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocalData } from '../../util/helper';
const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {

  const [merchant, setMerchant] = useState('');
  useEffect(() => {
    // console.log(getLocalData('store')
    setMerchant(JSON.parse(getLocalData('store')))
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
        © 2020{" "}
        <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          Flone
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

export default FooterCopyright;
