import PropTypes from "prop-types";
import React from "react";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass,
  strings
}) => {
  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
        } ${widgetColorClass ? widgetColorClass : ""}`}
    >
      <div className="footer-title">
        <h3>{strings["Subscribe"]}</h3>
      </div>
      <div className={`subscribe-style ${colorClass ? colorClass : ""}`}>
        <p>{strings["Get E-mail updates about our latest shop and special offers."]}</p>
        {/* subscribe email */}
        <SubscribeEmail mailchimpUrl="//xyz.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string
};

export default FooterNewsletter;
