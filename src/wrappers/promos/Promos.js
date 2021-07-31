import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-four.json";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle.js";

const FeatureIcon = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg
}) => {
  return (
    <div
      className={`support-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
        } ${spaceBottomClass ? spaceBottomClass : ""} ${
        responsiveClass ? responsiveClass : ""
        }`}
      style={
        bgImg
          ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }
          : {}
      }
    >
      <div className="category-home">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/03/neo25-1-1024x683.jpg" width="1000" height="517" /></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" width="1000" height="517" /></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" width="1000" height="517" /></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" width="1000" height="517" /></div>        
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" width="1000" height="517" /></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"><img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" width="1000" height="517" /></div>        
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;
