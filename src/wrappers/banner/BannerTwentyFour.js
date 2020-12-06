import React from "react";
import bannerData from "../../data/banner/banner-twenty-four.json";
import BannerTwentyFourSingle from "../../components/banner/BannerTwentyFourSingle.js";

const BannerTwentyFour = ({ spaceTopClass, spaceBottomClass }) => {
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
                <BannerTwentyFourSingle
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

export default BannerTwentyFour;
