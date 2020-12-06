import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-three.json";
import BannerThreeSingle from "../../components/banner/BannerThreeSingle.js";

const BannerThree = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerThreeSingle
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

BannerThree.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerThree;
