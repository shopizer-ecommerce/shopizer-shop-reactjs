import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { multilanguage } from "redux-multilanguage";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import { isValidObject } from "../../util/helper";
import { useForm } from "react-hook-form";
import { getState } from "../../redux/actions/userAction";
import { setLoader } from "../../redux/actions/loaderActions";
import {
  addToCart,
  // decreaseQuantity,
  deleteFromCart,
  // cartItemStock,
  // deleteAllFromCart
} from "../../redux/actions/cartActions";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import constant from '../../util/constant';
import WebService from '../../util/webService';

const couponCode = {
  code: {
    name: 'code',
    validate: {
      required: {
        value: true,
        message: "Coupon code is required"
      },

      pattern: {
        value: /^([a-zA-Z0-9 _-]+)$/,
        message: 'Please entered alphanumeric value'
      }
    }
  }
}
// const quoteForm = {

//   postalCode: {
//     name: "postalCode",
//     validate: {
//       required: {
//         value: true,
//         message: "postalCode is required"
//       }
//     }
//   },
//   country: {
//     name: "country",
//     validate: {
//       required: {
//         value: true,
//         message: "Country is required"
//       }
//     }
//   },
//   stateProvince: {
//     name: "stateProvince",
//     validate: {
//       required: {
//         value: true,
//         message: "State is required"
//       }
//     }
//   },
// };
const Cart = ({
  location,
  cartID,
  defaultStore,
  decreaseQuantity,
  increaseQuantity,
  getValue,
  deleteFromCart,
  countryData,
  stateData,
  getState,
  strings,
  merchant,
  isLoading,
  setLoader,
  cartCount
  // deleteAllFromCart,

}) => {
  const { addToast } = useToasts();
  const { pathname } = location;
  const history = useHistory();
  const [cartItems, setCartItems] = useState({})
  // const cartTotalPrice = cartItems.displaySubTotal;
  // const grandTotalPrice = cartItems.displaySubTotal;
  // const { register, handleSubmit, control, errors } = useForm({ mode: 'onChange' });
  const {
    register: codeRef,
    handleSubmit: codeSubmit,
    errors: codeErr
  } =
    useForm({ mode: 'onChange' });

  // const [shippingOptions, setShippingOptions] = useState();
  const [shippingOptions] = useState();

  useEffect(() => {
    getCartData()
    // if (!isValidObject(cartItems)) {
    //   history.push('/')
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(cartCount)
    async function fetchData() {
      let action = constant.ACTION.VERSION_V1 + constant.ACTION.CART + cartID + '?store=' + defaultStore;
      try {
        let response = await WebService.get(action);
        if (response) {
          setCartItems(response)
        }
      } catch (error) {
        console.log(error, 'jaimin')
        setTimeout(() => {
          history.push('/')
        }, 200);
      }
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartCount])

  const getCartData = async () => {
    setLoader(true)
    let action = constant.ACTION.VERSION_V1 + constant.ACTION.CART + cartID + '?store=' + defaultStore;
    try {
      let response = await WebService.get(action);
      if (response) {
        setCartItems(response)
      }
      setLoader(false)
    } catch (error) {
      setLoader(false)
      setTimeout(() => {
        history.push('/')
      }, 200);

    }
  }
  const deleteAllFromCart = () => {
    cartItems.products.forEach((value) => {
      deleteFromCart(cartItems.code, value, defaultStore, addToast)
    });
    //go to home page
    history.push('/');

  }

  // const decrease = (cartItems, item, qty) => {

  // }

  // const increase = (cartItems, item, key, addToast, qty) => {
  //   console.log('increaseQuantity... ' + JSON.stringify(cartItems.products));          
  //   item.quantity = qty;
  //   console.log('quantity... ' + JSON.stringify(item)); 
  //   cartItems.products.splice(key,1,item);
  //   console.log('New items... ' + JSON.stringify(cartItems.products)); 
  //   //modify qty

  // }

  // const getQuote = async (data) => {
  //   let action = constant.ACTION.VERSION_V1 + constant.ACTION.CART + cartID + '/' + constant.ACTION.SHIPPING;
  //   let param = {};
  //   param = { 'postalCode': data.postalCode, 'countryCode': data.country }
  //   try {
  //     let response = await WebService.post(action, param);
  //     //console.log(response.shippingOptions);
  //     if (response) {
  //       setShippingOptions(response.shippingOptions)
  //     }
  //   } catch (error) {
  //   }
  // }
  const applyPromoCode = async (data) => {
    // console.log(data)
    setLoader(true)
    let action = constant.ACTION.VERSION_V1 + constant.ACTION.CART + cartID + '/' + constant.ACTION.PROMO + data.code;
    let param = {};
    param = { 'promoCart': data.code }
    try {
      let response = await WebService.post(action, param);
      // console.log(response);
      if (response) {
        setCartItems(response)
      }
      setLoader(false)
    } catch (error) {
      setLoader(false)
    }
  }
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name} | {strings["Place your order"]}</title>
        {/* <meta
          name="description"
          content="Cart page of flone react shopizer eCommerce template."
        /> */}
      </MetaTags>

      <BreadcrumbsItem to="/">{strings["Home"]}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings["Cart"]}
      </BreadcrumbsItem>

      <Layout headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {isValidObject(cartItems) && cartItems.products.length > 0 ? (
              <Fragment>
                <h3 className="cart-page-title">{strings["Your cart items"]}</h3>
                <div className="row custom-cart-item">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>{strings["Image"]}</th>
                            <th>{strings["Product Name"]}</th>
                            <th>{strings["Unit Price"]}</th>
                            <th>{strings["Qty"]}</th>
                            <th>{strings["Subtotal"]}</th>
                            <th>{strings["Action"]}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.products.map((cartItem, key) => {

                            // const finalProductPrice = cartItem.originalPrice;
                            const finalDiscountedPrice = cartItem.finalPrice;

                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link to={"/product/" + cartItem.description.friendlyUrl} >
                                    <img className="img-fluid" src={defaultImage(cartItem)} alt="" />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link to={"/product/" + cartItem.description.friendlyUrl}>
                                    {cartItem.description.name}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  {/* {cartItem.discounted ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : ( */}
                                  <span className="amount">
                                    {finalDiscountedPrice}
                                  </span>
                                  {/* )} */}
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    {/* <button className="dec qtybutton" onClick={() => decreaseQuantity(cartItems, key, cartItem, addToast, cartItems.code, cartItem.quantity - 1, defaultStore)} > - </button>
                                    <input className="cart-plus-minus-box" onChange={() => getValue()} type="text" value={cartItem.quantity} />
                                    <button className="inc qtybutton" onClick={() => increaseQuantity(cartItem, cartID, cartItem.quantity + 1, addToast)}>+</button> */}
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

                      <div className="cart-clear">
                        <button onClick={() => deleteAllFromCart()}>
                          {strings["Clear Shopping Cart"]}
                        </button>
                      </div>
                      <div className="cart-shiping-update">
                        <Link to="/">{strings["Continue Shopping"]} </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row cart-custom-row">
                  <div className="col-lg-4 col-md-6">
                    &nbsp;
                  </div>
                  {/* 
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          {strings["Estimate Shipping And Tax"]}
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          {strings["Enter your destination to get a shipping estimate."]}
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
                                      <option>{strings["Select a country"]}</option>
                                      {

                                        countryData.map((data, i) => {
                                          return <option key={i} value={data.code}>{data.name}</option>
                                        })
                                      }
                                    </select>
                                  )
                                }}
                              />
                              {errors[quoteForm.country.name] && <p className="error-msg">{errors[quoteForm.country.name].message}</p>}
                            </div>
                            <div className="tax-select">
                              {
                                stateData && stateData.length > 0 ?
                                  <Controller
                                    name={quoteForm.stateProvince.name}
                                    control={control}
                                    rules={quoteForm.stateProvince.validate}
                                    render={props => {
                                      return (
                                        <select onChange={(e) => { props.onChange(e.target.value) }} value={props.value}>
                                          <option>{strings["Select a state"]}</option>
                                          {
                                            stateData.map((data, i) => {
                                              return <option key={i} value={data.code}>{data.name}</option>
                                            })
                                          }
                                        </select>)
                                    }}
                                  />
                                  :
                                  <input type="text" name={quoteForm.stateProvince.name} ref={register(quoteForm.stateProvince.validate)} placeholder={strings["State"]} />
                              }
                              {errors[quoteForm.stateProvince.name] && <p className="error-msg">{errors[quoteForm.stateProvince.name].message}</p>}
                            </div>
                            <div className="tax-select">
                              
                              <input type="text" name={quoteForm.postalCode.name} ref={register(quoteForm.postalCode.validate)} placeholder={strings["Postcode"]} />
                              {errors[quoteForm.postalCode.name] && <p className="error-msg">{errors[quoteForm.postalCode.name].message}</p>}
                            </div>
                            <button className="cart-btn-2" type="submit" >
                              {strings["Get A Quote"]}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                    */}

                  <div className="col-lg-8 col-md-6 cart-total">
                    <div className="box-custom">
                      <div className="discount-code-wrapper coupon-code">
                        <div className="title-wrap">
                          <h4 className="cart-bottom-title section-bg-gray">
                            {strings["Use Coupon Code"]}
                          </h4>
                        </div>
                        {
                          cartItems.promoCode ?
                            <div className="discount-code">
                              <p className="coupon-applied">Your coupon code has been applied!</p>
                              <h1 className="promoCode">{cartItems.promoCode}</h1>
                            </div> :
                            <div className="discount-code">
                              <p>{strings["Enter your coupon code if you have one."]}</p>
                              <form onSubmit={codeSubmit(applyPromoCode)}>
                                <input type="text" name={couponCode.code.name} ref={codeRef(couponCode.code.validate)} />
                                {codeErr[couponCode.code.name] && <p className="error-msg">{codeErr[couponCode.code.name].message}</p>}
                                <button className="cart-btn-2" type="submit">
                                  {strings["Apply Coupon"]}
                                </button>
                              </form>
                            </div>
                        }

                      </div>

                      <div className="grand-totall cart-total-box">
                        <div className="title-wrap">
                          <h4 className="cart-bottom-title section-bg-gary-cart">
                            {strings["Cart Total"]}
                          </h4>
                        </div>
                        <h5>
                          {strings["Total products"]}{" "}
                          <span>
                            {cartItems.displaySubTotal}
                          </span>
                        </h5>
                        <h4 className="grand-totall-title">
                          {strings["Grand Total"]}{" "}
                          <span>
                            {cartItems.displaySubTotal}
                          </span>
                        </h4>
                        <Link to={process.env.PUBLIC_URL + "/checkout"}>
                          {strings["Proceed to Checkout"]}
                        </Link>
                      </div>
                    </div>
                    {
                      shippingOptions &&
                      <div className="grand-totall" style={{ marginTop: 30 }}>
                        <div className="title-wrap">
                          <h4 className="cart-bottom-title section-bg-gary-cart">
                            {"Shipping and tax"}
                          </h4>
                        </div>
                        {
                          shippingOptions.map((value, i) => {
                            return (<h5 key={i}>
                              {value.optionName}{" "}
                              <span>
                                {value.optionPriceText}
                              </span>
                            </h5>)
                          })
                        }
                      </div>
                    }
                  </div>

                </div>
              </Fragment>
            ) : (
                !isLoading && <div className="row">
                  <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-cart"></i>
                      </div>
                      <div className="item-empty-area__text">
                        {strings["No items found in cart"]} <br />{" "}
                        <Link to="/">
                          {strings["Shop now"]}
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

    cartCount: state.cartData.cartCount,
    cartID: state.cartData.cartID,
    defaultStore: state.merchantData.defaultStore,
    countryData: state.userData.country,
    stateData: state.userData.state,
    merchant: state.merchantData.merchant,
    isLoading: state.loading.isLoading
  };
};

function defaultImage(product) {
  if (product.images && product.images.length > 0) {
    return product.images[0].imageUrl;
  } else if (product.image != null) {
    return product.imageUrl;
  } else {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addToCart: (item, addToast, quantityCount) => {
    //   dispatch(addToCart(item, addToast, quantityCount));
    // },
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    decreaseQuantity: (item, addToast, cartId, quantityCount, defaultStore) => {
      dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore));
    },
    increaseQuantity: (item, addToast, cartId, quantityCount, defaultStore) => {
      dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore));
    },
    // decreaseQuantity: (cartItems, key, item, addToast, cartId, quantityCount, defaultStore) => {
    //   console.log('decreaseQuantity...');
    //   //dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore));
    // },
    // increaseQuantity: (item, cartId, quantityCount, addToast) => {
    //   dispatch(addToCart(item, addToast, cartId, quantityCount, ''));
    // },
    // getValue: () => {
    //   return 5;
    // },
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

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(Cart));
