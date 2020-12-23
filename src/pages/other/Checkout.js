import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { isValidObject } from "../../util/helper";
import constant from '../../util/constant';
import WebService from '../../util/webService';
import { getCountry, getState } from "../../redux/actions/userAction";
import { useForm, Controller } from "react-hook-form";

const paymentForm = {
  firstName: {
    name: "firstName",
    validate: {
      required: {
        value: true,
        message: "Firstname is required"
      }
    }
  },
  lastName: {
    name: "lastName",
    validate: {
      required: {
        value: true,
        message: "Lastname is required"
      }
    }
  },
  company: {
    name: "company"
  },
  address: {
    name: "address",
    validate: {
      required: {
        value: true,
        message: "Address is required"
      }
    }
  },
  city: {
    name: "city",
    validate: {
      required: {
        value: true,
        message: "City is required"
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
  postalCode: {
    name: "postalCode",
    validate: {
      required: {
        value: true,
        message: "Postal code is required"
      }
    }
  },
  phone: {
    name: "phone",
    validate: {
      required: {
        value: true,
        message: "Phone number is required"
      },
      minLength: {
        value: 10,
        message: "Enter a 10-digit number"
      }
    }
  },
  email: {
    name: "email",
    validate: {
      required: {
        value: true,
        message: "Email is required"
      },
      pattern: {
        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        message: 'Please entered the valid email id'
      }
    }
  },
  shipFirstName: {
    name: "shipFirstName",
    validate: {
      required: {
        value: true,
        message: "Firstname is required"
      }
    }
  },
  shipLastName: {
    name: "shipLastName",
    validate: {
      required: {
        value: true,
        message: "Lastname is required"
      }
    }
  },
  shipCompany: {
    name: "shipCompany"
  },
  shipAddress: {
    name: "shipAddress",
    validate: {
      required: {
        value: true,
        message: "Address is required"
      }
    }
  },
  shipCity: {
    name: "shipCity",
    validate: {
      required: {
        value: true,
        message: "City is required"
      }
    }
  },
  shipCountry: {
    name: "shipCountry",
    validate: {
      required: {
        value: true,
        message: "Country is required"
      }
    }
  },
  shipStateProvince: {
    name: "shipStateProvince",
    validate: {
      required: {
        value: true,
        message: "State is required"
      }
    }
  },
  shipPostalCode: {
    name: "shipPostalCode",
    validate: {
      required: {
        value: true,
        message: "Postal code is required"
      }
    }
  },
  shipPhone: {
    name: "shipPhone",
    validate: {
      required: {
        value: true,
        message: "Phone number is required"
      },
      minLength: {
        value: 10,
        message: "Enter a 10-digit number"
      }
    }
  },
  shipEmail: {
    name: "shipEmail",
    validate: {
      required: {
        value: true,
        message: "Email is required"
      },
      pattern: {
        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        message: 'Please entered the valid email id'
      }
    }
  }
}
const Checkout = ({ location, cartItems, getCountry, getState, countryData, stateData, currentLocation, userData }) => {
  const { pathname } = location;
  let cartTotalPrice = 0;
  // console.log(cartItems);
  const [config, setConfig] = useState({});
  const [isShipping, setIsShipping] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [password, setPassword] = useState('');
  const [note, setNote] = useState('');
  const [shippingOptions, setShippingOptions] = useState();
  const [shippingQuote, setShippingQuote] = useState([]);
  const { register, control, handleSubmit, errors, setValue, watch } = useForm();

  useEffect(() => {
    console.log(userData)
    if (userData) {
      getProfile()
    } else {
      setDefualtsValue()
    }
    getCountry()
    getConfig()
    shippingQuoteChange('')
  }, []);
  const setDefualtsValue = () => {

    setValue('country', currentLocation.find(i => i.types.some(i => i == "country")).address_components[0].short_name)
    setValue('city', currentLocation.find(i => i.types.some(i => i == "locality")).address_components[0].short_name)
    setValue('stateProvince', currentLocation.find(i => i.types.some(i => i == "administrative_area_level_1")).address_components[0].short_name)

  }
  const getProfile = async () => {
    let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.PROFILE;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        // setConfig(response)
      }
    } catch (error) {
    }
  }
  const getConfig = async () => {
    let action = constant.ACTION.CONFIG;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setConfig(response)
      }
    } catch (error) {
    }
  }
  const onChangeShipAddress = async () => {
    setIsShipping(!isShipping)
    console.log(currentLocation.find(i => i.types.some(i => i == "country")).address_components[0].short_name)
    setTimeout(() => {
      setValue('shipCountry', currentLocation.find(i => i.types.some(i => i == "country")).address_components[0].short_name)
      setValue('shipCity', currentLocation.find(i => i.types.some(i => i == "locality")).address_components[0].short_name)
      setValue('shipStateProvince', currentLocation.find(i => i.types.some(i => i == "administrative_area_level_1")).address_components[0].short_name)
      onChangeShipping()
    }, 1000);


  }
  const onChangeShipping = async () => {
    console.log(watch('shipPostalCode'))
    let action = constant.ACTION.CART + cartItems.code + '/' + constant.ACTION.SHIPPING;
    let param = {};
    if (isShipping) {
      param = { 'postalCode': watch('shipPostalCode'), 'countryCode': watch('shipCountry') }
    } else {
      param = { 'postalCode': watch('postalCode'), 'countryCode': watch('country') }
    }
    try {
      let response = await WebService.post(action, param);
      console.log(response.shippingOptions);
      if (response) {
        setShippingOptions(response.shippingOptions)
      }
    } catch (error) {
    }
  }
  const shippingQuoteChange = async (quoteID) => {
    let action;
    if (quoteID) {
      action = constant.ACTION.CART + cartItems.code + '/' + constant.ACTION.TOTAL + '?quote=' + quoteID;
    } else {
      action = constant.ACTION.CART + cartItems.code + '/' + constant.ACTION.TOTAL;
    }
    console.log(action)
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setShippingQuote(response.totals)
      }
    } catch (error) {
    }

  }
  const onSubmitOrder = (data) => {
    console.log(data)
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Importa | Checkout</title>
        {/* <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {isValidObject(cartItems) && cartItems.products.length > 0 ? (
              <form onSubmit={handleSubmit(onSubmitOrder)} >
                <div className="row">
                  <div className="col-lg-7">
                    <div className="billing-info-wrap">
                      <h3>Billing Details</h3>
                      <div className="row">

                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>First Name</label>
                            <input type="text" name={paymentForm.firstName.name} ref={register(paymentForm.firstName.validate)} />
                            {errors[paymentForm.firstName.name] && <p className="error-msg">{errors[paymentForm.firstName.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Last Name</label>
                            <input type="text" name={paymentForm.lastName.name} ref={register(paymentForm.lastName.validate)} />
                            {errors[paymentForm.lastName.name] && <p className="error-msg">{errors[paymentForm.lastName.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Company Name</label>
                            <input type="text" name={paymentForm.company.name} ref={register(paymentForm.company.validate)} />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Street Address</label>
                            <input
                              className="billing-address"
                              placeholder="House number and street name"
                              type="text"
                              name={paymentForm.address.name}
                              ref={register(paymentForm.address.validate)}
                            />
                            {errors[paymentForm.address.name] && <p className="error-msg">{errors[paymentForm.address.name].message}</p>}

                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-select mb-20">
                            <label>Country</label>

                            <Controller
                              name={paymentForm.country.name}
                              control={control}
                              rules={paymentForm.country.validate}
                              render={props => {
                                return (
                                  // console.log(props) ||
                                  <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value); onChangeShipping() }}>
                                    <option>Select a country</option>
                                    {

                                      countryData.map((data, i) => {
                                        return <option key={i} value={data.code} selected={props.value === data.code}>{data.name}</option>
                                      })
                                    }
                                  </select>
                                )
                              }}
                            />

                            {errors[paymentForm.country.name] && <p className="error-msg">{errors[paymentForm.country.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Town / City</label>
                            <input type="text" name={paymentForm.city.name} ref={register(paymentForm.city.validate)} />
                            {errors[paymentForm.city.name] && <p className="error-msg">{errors[paymentForm.city.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-select mb-20">
                            <label>State</label>
                            {
                              stateData && stateData.length > 0 ?
                                <Controller
                                  name={paymentForm.stateProvince.name}
                                  control={control}
                                  rules={paymentForm.stateProvince.validate}
                                  render={props => {
                                    return (
                                      <select onChange={(e) => props.onChange(e.target.value)}>
                                        <option>Select a state</option>
                                        {
                                          stateData.map((data, i) => {
                                            return <option key={i} value={data.id} selected={props.value === data.code}>{data.name}</option>
                                          })
                                        }
                                      </select>)
                                  }}
                                />
                                :
                                <input type="text" name={paymentForm.stateProvince.name} ref={register(paymentForm.stateProvince.validate)} />
                            }
                            {errors[paymentForm.stateProvince.name] && <p className="error-msg">{errors[paymentForm.stateProvince.name].message}</p>}

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Postcode / ZIP</label>
                            <input type="text" name={paymentForm.postalCode.name} ref={register(paymentForm.postalCode.validate)} onChange={() => onChangeShipping()} />
                            {errors[paymentForm.postalCode.name] && <p className="error-msg">{errors[paymentForm.postalCode.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Phone</label>
                            <input type="text" name={paymentForm.phone.name} ref={register(paymentForm.phone.validate)} />
                            {errors[paymentForm.phone.name] && <p className="error-msg">{errors[paymentForm.phone.name].message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Email Address</label>
                            <input type="text" name={paymentForm.email.name} ref={register(paymentForm.email.validate)} />
                            {errors[paymentForm.email.name] && <p className="error-msg">{errors[paymentForm.email.name].message}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="login-toggle-btn">
                        <input type="checkbox" value={isAccount} onChange={() => setIsAccount(!isAccount)} />
                        <label className="ml-10 mb-20">Create an account</label>
                      </div>
                      {
                        isAccount &&
                        <div>
                          <p style={{ color: '#fb799c' }}> Create an account by entering the information below.If you are a returning customer please login using the link at the top of the page.</p>
                          <div className="col-lg-12">
                            <div className="billing-info mb-20">
                              <label>Account Password</label>
                              <input type="password" name={paymentForm.phone.name} ref={register(paymentForm.phone.validate)} />
                              {errors[paymentForm.phone.name] && <p className="error-msg">{errors[paymentForm.phone.name].message}</p>}
                            </div>
                          </div>
                        </div>
                      }
                      <div className="login-toggle-btn">
                        <input type="checkbox" value={isShipping} onChange={onChangeShipAddress} />
                        <label className="ml-10 mb-20">SHIP TO A DIFFERENT ADDRESS?</label>
                      </div>
                      {
                        isShipping &&
                        <div className="billing-info-wrap">
                          <h3>Shipping Details</h3>
                          <div className="row">

                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info mb-20">
                                <label>First Name</label>
                                <input type="text" name={paymentForm.shipFirstName.name} ref={register(paymentForm.shipFirstName.validate)} />
                                {errors[paymentForm.shipFirstName.name] && <p className="error-msg">{errors[paymentForm.shipFirstName.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info mb-20">
                                <label>Last Name</label>
                                <input type="text" name={paymentForm.shipLastName.name} ref={register(paymentForm.shipLastName.validate)} />
                                {errors[paymentForm.shipLastName.name] && <p className="error-msg">{errors[paymentForm.shipLastName.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="billing-info mb-20">
                                <label>Company Name</label>
                                <input type="text" name={paymentForm.shipCompany.name} ref={register(paymentForm.shipCompany.validate)} />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="billing-info mb-20">
                                <label>Street Address</label>
                                <input
                                  className="billing-address"
                                  placeholder="House number and street name"
                                  type="text"
                                  name={paymentForm.shipAddress.name}
                                  ref={register(paymentForm.shipAddress.validate)}
                                />
                                {errors[paymentForm.shipAddress.name] && <p className="error-msg">{errors[paymentForm.shipAddress.name].message}</p>}

                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="billing-select mb-20">
                                <label>Country</label>

                                <Controller
                                  name={paymentForm.shipCountry.name}
                                  control={control}
                                  rules={paymentForm.shipCountry.validate}
                                  render={props => {
                                    return (
                                      <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value); onChangeShipping() }}>
                                        <option>Select a country</option>
                                        {

                                          countryData.map((data, i) => {
                                            return <option key={i} value={data.code} selected={props.value === data.code}>{data.name}</option>
                                          })
                                        }
                                      </select>
                                    )
                                  }}
                                />

                                {errors[paymentForm.shipCountry.name] && <p className="error-msg">{errors[paymentForm.shipCountry.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="billing-info mb-20">
                                <label>Town / City</label>
                                <input type="text" name={paymentForm.shipCity.name} ref={register(paymentForm.shipCity.validate)} />
                                {errors[paymentForm.shipCity.name] && <p className="error-msg">{errors[paymentForm.shipCity.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-select mb-20">
                                <label>State</label>
                                {
                                  stateData && stateData.length > 0 ?
                                    <Controller
                                      name={paymentForm.shipStateProvince.name}
                                      control={control}
                                      rules={paymentForm.shipStateProvince.validate}
                                      render={props => {
                                        return (
                                          <select onChange={(e) => props.onChange(e.target.value)}>
                                            <option>Select a state</option>
                                            {
                                              stateData.map((data, i) => {
                                                return <option key={i} value={data.id} selected={props.value === data.code}>{data.name}</option>
                                              })
                                            }
                                          </select>)
                                      }}
                                    />
                                    :
                                    <input type="text" name={paymentForm.shipStateProvince.name} ref={register(paymentForm.shipStateProvince.validate)} />
                                }
                                {errors[paymentForm.shipStateProvince.name] && <p className="error-msg">{errors[paymentForm.shipStateProvince.name].message}</p>}

                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info mb-20">
                                <label>Postcode / ZIP</label>
                                <input type="text" name={paymentForm.shipPostalCode.name} ref={register(paymentForm.shipPostalCode.validate)} onChange={() => onChangeShipping()} />
                                {errors[paymentForm.shipPostalCode.name] && <p className="error-msg">{errors[paymentForm.shipPostalCode.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info mb-20">
                                <label>Phone</label>
                                <input type="text" name={paymentForm.shipPhone.name} ref={register(paymentForm.shipPhone.validate)} />
                                {errors[paymentForm.shipPhone.name] && <p className="error-msg">{errors[paymentForm.shipPhone.name].message}</p>}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info mb-20">
                                <label>Email Address</label>
                                <input type="text" name={paymentForm.shipEmail.name} ref={register(paymentForm.shipEmail.validate)} />
                                {errors[paymentForm.shipEmail.name] && <p className="error-msg">{errors[paymentForm.shipEmail.name].message}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                      <div className="additional-info-wrap">
                        <h4>Additional information</h4>
                        <div className="additional-info">
                          <label>Order notes</label>
                          <textarea
                            placeholder="Notes about your order, e.g. special notes for delivery. "
                            name="message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="your-order-area">
                      <h3>Your order</h3>
                      <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                          <div className="your-order-top">
                            <ul>
                              <li>Product</li>
                              <li>Total</li>
                            </ul>
                          </div>
                          <div className="your-order-middle">
                            <ul>
                              {cartItems.products.map((cartItem, key) => {

                                return (
                                  <li key={key}>
                                    <span className="order-middle-left">
                                      {cartItem.description.name} X {cartItem.quantity}
                                    </span>{" "}
                                    <span className="order-price">
                                      {
                                        cartItem.displaySubTotal
                                      }
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="your-order-sub-total">
                            {
                              shippingQuote.length > 0 &&
                              shippingQuote.map((quote, i) => {
                                return (
                                  quote.title != 'Total' &&
                                  <ul className="mb-20">
                                    <li className="order-total">{quote.title}</li>
                                    <li>
                                      {quote.total}
                                    </li>
                                  </ul>)
                              })
                            }

                          </div>
                          <div className="your-order-bottom">
                            {
                              config.displayShipping && shippingOptions &&
                              <ul>
                                <li className="your-order-shipping">Shipping Fees</li>
                                {
                                  shippingOptions.map((value, i) => {
                                    return (<li key={i}>
                                      <div className="login-toggle-btn">
                                        <input type="radio" value={value.shippingQuoteOptionId} onChange={() => shippingQuoteChange(value.shippingQuoteOptionId)} />
                                        <label className="ml-10 mb-20">{value.optionName} - {value.optionPriceText}</label>
                                      </div>
                                    </li>)
                                  })
                                }

                              </ul>
                            }

                            {
                              config.displayShipping && !shippingOptions &&
                              <ul>
                                <li className="your-order-shipping">Shipping Fees</li>
                                <li>Free shipping</li>
                              </ul>
                            }

                          </div>
                          <div className="your-order-total">
                            <ul>
                              <li className="order-total">Total</li>
                              <li>
                                {cartItems.displayTotal}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="payment-method"></div>
                      </div>
                      <div className="place-order mt-25">
                        <button className="btn-hover">Place Order</button>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
            ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-cash"></i>
                      </div>
                      <div className="item-empty-area__text">
                        No items found in cart to checkout <br />{" "}
                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
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

Checkout.propTypes = {
  cartItems: PropTypes.object,
  // currency: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData.cartItems,
    countryData: state.userData.country,
    stateData: state.userData.state,
    currentLocation: state.userData.currentAddress,
    userData: state.userData.userData
    // currency: state.currencyData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCountry: () => {
      dispatch(getCountry());
    },
    getState: (code) => {
      dispatch(getState(code));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
