import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirty-three.json";
import BannerThirtyThreeSingle from "../../components/banner/BannerThirtyThreeSingle.js";

const BannerThirtyThree = ({ spaceBottomClass, bgColorClass }) => {
  return (
    <div
      className={`banner-area ${bgColorClass ? bgColorClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerThirtyThreeSingle
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

BannerThirtyThree.propTypes = {
  spaceBottomClass: PropTypes.string,
  bgColorClass: PropTypes.string
};

export default BannerThirtyThree;
