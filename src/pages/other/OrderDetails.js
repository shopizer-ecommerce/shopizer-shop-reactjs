import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import constant from '../../util/constant';
import WebService from '../../util/webService';
// import { addToCart } from "../../redux/actions/cartActions";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { isValidObject } from "../../util/helper";
import { multilanguage } from "redux-multilanguage";
import { setLoader } from "../../redux/actions/loaderActions";
import { setProductID } from "../../redux/actions/productActions";
import { useReactToPrint } from 'react-to-print';
const OrderDetails = ({
    location,
    orderID,
    strings,
    setLoader,
    setProductID,
    merchant,
    isLoading
}) => {
    // const { addToast } = useToasts();
    const { pathname } = location;
    const componentRef = useRef();
    const [orderDetails, setorderDetails] = useState({});
    useEffect(() => {
        getOrderDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getOrderDetails = async () => {
        setLoader(true)
        let action = constant.ACTION.AUTH + constant.ACTION.ORDERS + orderID;
        try {
            let response = await WebService.get(action);
            if (response) {
                // console.log(response)
                setorderDetails(response)
                // // setConfig(response)
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
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Fragment>
            <MetaTags>
                <title>{merchant.name} | {strings["Order Details"]}</title>
                {/* <meta
          name="description"
          content="Wishlist page of flone react minimalist eCommerce template."
        /> */}
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings["Home"]}</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                {strings["Order Details"]}
            </BreadcrumbsItem>

            <Layout headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="cart-main-area pt-90 pb-100" ref={componentRef}>
                    <div className="container">
                        {isValidObject(orderDetails) ? (
                            <Fragment>
                                <div className="printRow">
                                    <h3 className="cart-page-title" style={{ marginBottom: 60 }}>{strings["Your orders details"]}</h3>

                                    <button id="printPageButton" className="print-button" onClick={handlePrint}>Print</button>

                                </div>
                                <div className="row" >
                                    <div className="col-12" style={{ marginBottom: 30 }}>
                                        <div style={{ padding: 15 }}>
                                            <span style={{ fontSize: 15 }}><b>{strings["Order No"]}</b> #{orderDetails.id}</span>
                                            <span style={{ fontSize: 15, float: "right" }}><b>{strings["Order Date"]}</b> {orderDetails.datePurchased}</span>
                                        </div>
                                        <div className="table-content table-responsive cart-table-content order-details">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>{strings["Image"]}</th>
                                                        <th>{strings["Product Name"]}</th>
                                                        <th>{strings["Qty"]}</th>
                                                        <th>{strings["Unit Price"]}</th>
                                                        <th>{strings["Subtotal"]}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderDetails.products.map((orderItem, key) => {

                                                        return (
                                                            <tr key={key} className="customTrRow">
                                                                <td className="product-thumbnail">
                                                                    <Link onClick={() => onClickItem(orderItem.product)} to={"/product/" + orderItem.product.description.friendlyUrl}>
                                                                        <img className="img-fluid" src={orderItem.product.image.imageUrl} alt="" />
                                                                    </Link>
                                                                </td>

                                                                <td className="product-name text-center">
                                                                    <Link onClick={() => onClickItem(orderItem.product)} to={"/product/" + orderItem.product.description.friendlyUrl}>
                                                                        {orderItem.productName}
                                                                    </Link>
                                                                    <br />
                                                                    SKU: {orderItem.sku}
                                                                </td>

                                                                <td className="product-price-cart">
                                                                    <span className="amount">
                                                                        {orderItem.orderedQuantity}
                                                                    </span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <span className="amount">
                                                                        {orderItem.price}
                                                                    </span>
                                                                </td>
                                                                <td className="product-subtotal">
                                                                    <span className="amount">
                                                                        {orderItem.subTotal}
                                                                    </span>
                                                                </td>
                                                                {/* <td className="product-status">
                                                                    <Link to={"/"}>
                                                                        Add to cart
                                                                    </Link>
                                                                </td> */}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>

                                            </table>

                                        </div>

                                    </div>
                                    <div className="col-12 custom-payment-shipping-details">
                                        <div className="col-7">
                                            <h3 className="cart-page-title" style={{ marginBottom: 40 }}>{strings["Payment & Shipping details"]}</h3>
                                            <div style={{ marginBottom: 20 }}>
                                                <span><b >{strings["Payment Methods"]}</b>{"    "} </span><span style={{ marginLeft: 20 }}>{orderDetails.paymentType}</span>
                                            </div>
                                            <div style={{ marginBottom: 20 }}>
                                                <span><b>{strings["Order Status"]}</b>{" "}</span><span style={{ marginLeft: 60 }}>{orderDetails.orderStatus}</span>
                                            </div>
                                            <div style={{ marginBottom: 20 }}>
                                                <span><b >{strings["Billing Address"]}</b>{" "}</span><span style={{ marginLeft: 44 }}>{orderDetails.billing.address},  {orderDetails.billing.city} {orderDetails.billing.zone} {orderDetails.billing.country}, {orderDetails.billing.postalCode}</span>
                                            </div>
                                            {orderDetails.shipping !== null &&
                                                <div style={{ marginBottom: 20 }}>
                                                    <span><b >{strings["Delivery Address"]}</b>{" "}</span> <span style={{ marginLeft: 30 }}>{orderDetails.delivery.address},  {orderDetails.delivery.city} {orderDetails.delivery.zone} {orderDetails.delivery.country}, {orderDetails.delivery.postalCode}</span>
                                                </div>
                                            }
                                        </div>
                                        <div className="col-5 order-details-total">
                                            {
                                                orderDetails.totals.map((value, i) => {
                                                    return (
                                                        <h4 key={i} className="amount_type">
                                                            <span className="amount_module">{value.module}</span>
                                                            <span className="amount">
                                                                US${value.value}
                                                            </span>
                                                        </h4>
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
                                                {strings["No items found"]} <br />{" "}
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
            </Layout>
        </Fragment>
    );
};

OrderDetails.propTypes = {
    location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    const order_id = ownProps.match.params.id;
    return {
        orderID: order_id,
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

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(OrderDetails));
