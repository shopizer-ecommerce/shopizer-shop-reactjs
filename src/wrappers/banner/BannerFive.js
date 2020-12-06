import React from "react";
import { Link } from "react-router-dom";

const BannerFive = () => {
  return (
    <div className="banner-area hm9-section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-21.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>Green Apple </h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-22.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>Ripe orange</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-23.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2">
                <span>-20% Off</span>
                <h2>New Fruits</h2>
                <h5>Best for your health</h5>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-24.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>Ripe Corn </h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-25.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>Green guava </h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
