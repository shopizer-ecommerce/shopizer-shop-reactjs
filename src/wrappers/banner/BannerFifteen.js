import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-fifteen.json";
import BannerFifteenSingle from "../../components/banner/BannerFifteenSingle.js";

const BannerFifteen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area banner-area-2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerFifteenSingle
                  spaceBottomClass="mb-10"
                  data={single}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

BannerFifteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerFifteen;
