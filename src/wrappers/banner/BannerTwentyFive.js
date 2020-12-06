import React from "react";
import bannerData from "../../data/banner/banner-twenty-five.json";
import BannerTwentyFiveSingle from "../../components/banner/BannerTwentyFiveSingle.js";

const BannerTwentyFive = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      }  ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerTwentyFiveSingle
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

export default BannerTwentyFive;
