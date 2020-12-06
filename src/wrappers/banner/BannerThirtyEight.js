import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirty-eight.json";
import BannerThirtyEightSingle from "../../components/banner/BannerThirtyEightSingle.js";

const BannerThirtyEight = ({ spaceTopClass, spaceBottomClass }) => {
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
              return <BannerThirtyEightSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

BannerThirtyEight.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerThirtyEight;
