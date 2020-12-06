import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirty-two.json";
import BannerThirtyTwoSingle from "../../components/banner/BannerThirtyTwoSingle.js";

const BannerThirtyTwo = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerThirtyTwoSingle
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

BannerThirtyTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerThirtyTwo;
