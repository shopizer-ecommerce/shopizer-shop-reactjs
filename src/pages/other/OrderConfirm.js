import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { connect } from "react-redux";
const OrderConfirm = ({ location, orderID }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Shopizer | Order Confirm</title>
        {/* <meta
          name="description"
          content="404 page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Order Confirm
      </BreadcrumbsItem>
      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h3>Order Completed</h3>
                  <h2>Thank you for ordering from importa</h2>
                  <p>
                    Your order id is <b>{orderID}</b> <br />An email with you order details has been sent to test@test.com
                  </p>
                  <p>
                    If you have any comments or suggestions for us. please send us an email with your
                    order id. We value your feedback
                  </p>
                  <Link to={"/"} className="error-btn">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

OrderConfirm.propTypes = {
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    orderID: state.cartData.orderID
  };
};
export default connect(mapStateToProps, null)(OrderConfirm);
// export default OrderConfirm;
