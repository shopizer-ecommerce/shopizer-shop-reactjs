import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import { isValidObject } from "../../util/helper";
import { useForm, Controller } from "react-hook-form";
import { getState } from "../../redux/actions/userAction";

import {
  addToCart,
  // decreaseQuantity,
  deleteFromCart,
  // cartItemStock,
  // deleteAllFromCart
} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


const quoteForm = {

  postalCode: {
    name: "postalCode",
    validate: {
      required: {
        value: true,
        message: "postalCode is required"
      }
    }
  },
  country: {
    name: "country",
    validate: {
      required: {
        value: true,
        message: "Country is required"
      }
    }
  },
  stateProvince: {
    name: "stateProvince",
    validate: {
      required: {
        value: true,
        message: "State is required"
      }
    }
  },
};
const Cart = ({
  location,
  cartItems,
  defaultStore,
  decreaseQuantity,
  increaseQuantity,
  // addToCart,
  deleteFromCart,
  countryData,
  stateData,
  getState
  // deleteAllFromCart,

}) => {
  const { addToast } = useToasts();
  const { pathname } = location;
  const cartTotalPrice = cartItems.displaySubTotal;
  const grandTotalPrice = cartItems.displaySubTotal;
  const { register, handleSubmit, control, formState } = useForm({ mode: 'onChange' });


  const deleteAllFromCart = () => {
    console.log(cartItems);
    cartItems.products.forEach((value) => {
      deleteFromCart(cartItems.code, value, defaultStore, addToast)
    });

  }
  const getQuote = () => {

  }
  return (
    <Fragment>
      <MetaTags>
        <title>Importa | Place your order</title>
        {/* <meta
          name="description"
          content="Cart page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>

      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Cart
      </BreadcrumbsItem>

      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {isValidObject(cartItems) && cartItems.products.length > 0 ? (
              <Fragment>
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.products.map((cartItem, key) => {

                            const finalProductPrice = cartItem.originalPrice;
                            const finalDiscountedPrice = cartItem.finalPrice;

                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link to={"/product/" + cartItem.id} >
                                    <img className="img-fluid" src={cartItem.image.imageUrl} alt="" />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link to={"/product/" + cartItem.id}>
                                    {cartItem.description.name}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  {cartItem.discounted ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : (
                                      <span className="amount">
                                        {finalProductPrice}
                                      </span>
                                    )}
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button className="dec qtybutton" onClick={() => decreaseQuantity(cartItem, addToast, cartItems.code, cartItem.quantity - 1, defaultStore)} > - </button>
                                    <input className="cart-plus-minus-box" type="text" value={cartItem.quantity} readOnly />
                                    <button className="inc qtybutton" onClick={() => increaseQuantity(cartItem, addToast, cartItems.code, cartItem.quantity + 1, defaultStore)}>+</button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {
                                    cartItem.displaySubTotal
                                  }
                                </td>

                                <td className="product-remove">
                                  <button onClick={() => deleteFromCart(cartItems.code, cartItem, defaultStore, addToast)}> <i className="fa fa-times"></i> </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link to="/">Continue Shopping </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => deleteAllFromCart()}>
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Estimate Shipping And Tax
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          Enter your destination to get a shipping estimate.
                        </p>
                        <div className="tax-select-wrapper">
                          <form onSubmit={handleSubmit(getQuote)}>
                            <div className="tax-select">
                              <Controller
                                name={quoteForm.country.name}
                                control={control}
                                rules={quoteForm.country.validate}
                                render={props => {
                                  return (
                                    <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value) }} value={props.value}>
                                      <option>Select a country</option>
                                      {

                                        countryData.map((data, i) => {
                                          return <option key={i} value={data.code}>{data.name}</option>
                                        })
                                      }
                                    </select>
                                  )
                                }}
                              />
                            </div>
                            <div className="tax-select">
                              <label>Region / State</label>
                              {
                                stateData && stateData.length > 0 ?
                                  <Controller
                                    name={quoteForm.stateProvince.name}
                                    control={control}
                                    rules={quoteForm.stateProvince.validate}
                                    render={props => {
                                      return (
                                        <select onChange={(e) => { props.onChange(e.target.value) }} value={props.value}>
                                          <option>Select a state</option>
                                          {
                                            stateData.map((data, i) => {
                                              return <option key={i} value={data.code}>{data.name}</option>
                                            })
                                          }
                                        </select>)
                                    }}
                                  />
                                  :
                                  <input type="text" name={quoteForm.stateProvince.name} ref={register(quoteForm.stateProvince.validate)} placeholder="Region / State" />
                              }
                            </div>
                            <div className="tax-select">
                              <label>Postal Code</label>
                              <input type="text" name={quoteForm.postalCode.name} ref={register(quoteForm.postalCode.validate)} placeholder="Postal Code" />
                            </div>
                            <button className="cart-btn-2" type="submit" disabled={!formState.isValid}>
                              Get A Quote
                          </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required name="name" />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products{" "}
                        <span>
                          {cartTotalPrice}
                        </span>
                      </h5>

                      <h4 className="grand-totall-title">
                        Grand Total{" "}
                        <span>
                          {grandTotalPrice}
                        </span>
                      </h4>
                      <Link to={process.env.PUBLIC_URL + "/checkout"}>
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-cart"></i>
                      </div>
                      <div className="item-empty-area__text">
                        No items found in cart <br />{" "}
                        <Link to="/">
                          Shop Now
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

Cart.propTypes = {
  // addToCart: PropTypes.func,
  cartItems: PropTypes.object,
  // currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  increaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData.cartItems,
    defaultStore: state.merchantData.defaultStore,
    countryData: state.userData.country,
    stateData: state.userData.state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addToCart: (item, addToast, quantityCount) => {
    //   dispatch(addToCart(item, addToast, quantityCount));
    // },
    decreaseQuantity: (item, addToast, cartId, quantityCount, defaultStore) => {
      dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore));
    },
    increaseQuantity: (item, addToast, cartId, quantityCount, defaultStore) => {
      dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore));
    },
    deleteFromCart: (cartId, item, defaultStore, addToast) => {
      dispatch(deleteFromCart(cartId, item, defaultStore, addToast));
    },
    getState: (code) => {
      dispatch(getState(code));
    }
    // deleteAllFromCart: addToast => {
    //   dispatch(deleteAllFromCart(addToast));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
