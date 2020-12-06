import PropTypes from "prop-types";
import React from "react";
import SubscribeEmailTwo from "../../components/newsletter/SubscribeEmailTwo";

const NewsletterFive = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  subscribeBtnClass,
  newsletterBg
}) => {
  return (
    <div
      className={`subscribe-area-3 bg-img ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      }  ${spaceRightClass ? spaceRightClass : ""}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + newsletterBg})`
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
            <div className="subscribe-style-3 subscribe-style-3--blue text-center">
              <h2>SUBSCRIBE NOW</h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              {/* subscription form */}
              <SubscribeEmailTwo
                mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                spaceTopClass="mt-35"
                subscribeBtnClass={subscribeBtnClass}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterFive.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  newsletterBg: PropTypes.string
};

export default NewsletterFive;
