import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-twenty-two.json";
import BannerTwentyTwoSingle from "../../components/banner/BannerTwentyTwoSingle.js";

const BannerTwentyTwo = ({ spaceTopClass, spaceBottomClass }) => {
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
              return <BannerTwentyTwoSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

BannerTwentyTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerTwentyTwo;
