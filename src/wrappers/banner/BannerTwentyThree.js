import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-twenty-three.json";
import BannerTwentyThreeSingle from "../../components/banner/BannerTwentyThreeSingle.js";

const BannerTwentyThree = ({ spaceTopClass, spaceBottomClass }) => {
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
              return <BannerTwentyThreeSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

BannerTwentyThree.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerTwentyThree;
