import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-one.json";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerOneSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
