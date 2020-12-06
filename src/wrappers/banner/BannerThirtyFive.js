import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirty-five.json";
import BannerThirtyFiveSingle from "../../components/banner/BannerThirtyFiveSingle";

const BannerThirtyFive = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass
}) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerThirtyFiveSingle
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

BannerThirtyFive.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerThirtyFive;
