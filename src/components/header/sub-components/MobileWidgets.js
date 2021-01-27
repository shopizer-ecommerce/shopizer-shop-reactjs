import React from "react";
import { connect } from "react-redux";
const MobileWidgets = ({ merchant }) => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://12452456012">{merchant.phone}</a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">{merchant.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};



export default connect(
  mapStateToProps,
  null
)(MobileWidgets);
// export default MobileWidgets;
