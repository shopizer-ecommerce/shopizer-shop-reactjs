import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-seventeen.json";
import BannerSeventeenSingle from "../../components/banner/BannerSeventeenSingle.js";

const BannerSeventeen = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerSeventeenSingle
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

BannerSeventeen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSeventeen;
