import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-eighteen.json";
import BannerEighteenSingle from "../../components/banner/BannerEighteenSingle.js";

const BannerEighteen = ({ spaceTopClass, spaceBottomClass }) => {
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
                <BannerEighteenSingle
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

BannerEighteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerEighteen;
