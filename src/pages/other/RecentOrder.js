import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import constant from '../../util/constant';
import WebService from '../../util/webService';
// import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { isValidObject } from "../../util/helper";
import { setLoader } from "../../redux/actions/loaderActions";
import { setProductID } from "../../redux/actions/productActions";
import { multilanguage } from "redux-multilanguage";
const RecentOrder = ({
  strings,
  location,
  setLoader,
  setProductID,
  merchant,
  isLoading
}) => {
  const history = useHistory();
  const { pathname } = location;
  const [orderData, setOrderData] = useState({});
  useEffect(() => {
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getOrder = async () => {
    setLoader(true)
    let action = constant.ACTION.AUTH + constant.ACTION.ORDERS;
    try {
      let response = await WebService.get(action);
      if (response) {
        // console.log(response)
        setOrderData(response)
      }
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log(error, '------------')
    }
  }
  const onClickItem = (product) => {
    // console.log(product);
    setProductID(product.id)
  }
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name} | {strings["Recent Orders"]}</title>
        {/* <meta
          name="description"
          content="Wishlist page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings["Home"]}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings["Recent Orders"]}
      </BreadcrumbsItem>

      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {isValidObject(orderData) && orderData.orders && orderData.orders.length > 0 ? (
              <Fragment>
                <h3 className="cart-page-title">{strings["Your orders items"]}</h3>
                <div className="row custom-recent-order">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      {
                        orderData.orders.map((order, i) => {


                          return (
                            <table key={i}>
                              <thead>
                                <tr className="order-header">
                                  <th>{strings["Order Id"]} :  {order.id}</th>
                                  <th onClick={() => history.push("/order-details/" + order.id)}>{strings["View Details"]}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {order.products.map((orderItem, key) => {

                                  return (
                                    <tr key={key}>
                                      <td className="product-thumbnail">
                                        <Link onClick={() => onClickItem(orderItem.product)} to={"/product/" + orderItem.product.description.friendlyUrl}>
                                          <img
                                            style={{ width: 140 }}
                                            className="img-fluid"
                                            src={orderItem.product.image.imageUrl}
                                            alt=""
                                          />
                                        </Link>
                                      </td>

                                      <td className="product-name">
                                        <Link onClick={() => onClickItem(orderItem.product)} to={"/product/" + orderItem.product.description.friendlyUrl}>
                                          {orderItem.productName}
                                        </Link>
                                        <br />
                                        SKU: {orderItem.sku}
                                      </td>

                                      <td className="product-price-cart">
                                        <span className="amount">
                                          {orderItem.price} <br /> ({orderItem.orderedQuantity} QTY)
                                        </span>
                                      </td>
                                      <td className="product-price-cart">
                                        <span className="amount">
                                          {orderItem.subTotal}
                                        </span>
                                      </td>
                                      <td className="product-status">
                                        {order.orderStatus}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                              <thead className="footer-table-row">
                                <tr>
                                  <th>{strings["Ordered on"]} {order.datePurchased}</th>
                                  <th>{strings["Order Total"]} :  US${order.totals[order.totals.length - 1].value}</th>
                                </tr>
                              </thead>
                            </table>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
                !isLoading && <div className="row">
                  <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-shopbag"></i>
                      </div>
                      <div className="item-empty-area__text">
                        {strings["No items found in recent order"]} <br />{" "}
                        <Link to={"/"}>
                          {strings["Shop Now"]}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

RecentOrder.propTypes = {
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant,
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    setProductID: (value) => {
      dispatch(setProductID(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(RecentOrder));
