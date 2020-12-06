import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const VideoPopup = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className={`video-popup ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-popup__image">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/img/banner/banner-41.jpg"
                }
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-popup__content">
              <h2 className="title mb-30">
                Supro is the modern luxury shopping destination
              </h2>
              <p className="text mb-30">
                Lorem ipsum dolor sit amet, consectetb adipisicing elit sed do
                eiusmod tempor incididunt.
              </p>
              <div className="link mb-30">
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  More About Us
                </Link>
              </div>
              <ModalVideo
                channel="youtube"
                isOpen={modalStatus}
                videoId="feOScd2HdiU"
                onClose={() => isOpen(false)}
              />
              <button onClick={() => isOpen(true)}>
                <i className="fa fa-play-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default VideoPopup;
