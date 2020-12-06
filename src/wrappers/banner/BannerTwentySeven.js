import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-twenty-seven.json";
import BannerTwentySevenSingle from "../../components/banner/BannerTwentySevenSingle.js";

const BannerTwentySeven = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div
      className={`banner-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerTwentySevenSingle
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

BannerTwentySeven.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerTwentySeven;
