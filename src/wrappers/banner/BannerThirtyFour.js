import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirty-four.json";
import BannerThirtyFourSingle from "../../components/banner/BannerThirtyFourSingle";

const BannerThirtyFour = ({
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
                <BannerThirtyFourSingle
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

BannerThirtyFour.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerThirtyFour;
