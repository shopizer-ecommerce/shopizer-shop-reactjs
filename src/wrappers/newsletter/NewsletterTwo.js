import PropTypes from "prop-types";
import React from "react";
import SubscribeEmailTwo from "../../components/newsletter/SubscribeEmailTwo";

const NewsletterTwo = ({
  spaceTopClass,
  spaceBottomClass,
  subscribeBtnClass
}) => {
  return (
    <div
      className={`subscribe-area-3 ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } `}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
            <div className="subscribe-style-3 text-center">
              <h2>Subscribe </h2>
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

NewsletterTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default NewsletterTwo;
