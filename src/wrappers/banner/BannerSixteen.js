import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-sixteen.json";
import BannerSixteenSingle from "../../components/banner/BannerSixteenSingle.js";

const BannerSixteen = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return (
              <BannerSixteenSingle
                data={single}
                key={key}
                spaceBottomClass="mb-30"
              />
            );
          })}
      </div>
    </div>
  );
};

BannerSixteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSixteen;
