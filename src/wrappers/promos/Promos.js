import PropTypes from "prop-types";
import React from "react";
// import featureIconData from "../../data/feature-icons/feature-icon-four.json";
// import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle.js";

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
    
  <div className="row" style={{margin: "0px"}}>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <a>
                <img src="http://perfectogaz.com/wp-content/uploads/2017/01/super.jpg" className="image"/>
                <div className="overlay">
                  <p>My Name is John</p>
                </div>
              </a>
            </div> 
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
