import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { getProductCartQuantity } from "../../helpers/product";
import { isValidObject } from "../../util/helper";
import { addToCart } from "../../redux/actions/cartActions";
// import { addToWishlist } from "../../redux/actions/wishlistActions";
// import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  // currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  // wishlistItem,
  // compareItem,
  addToast,
  addToCart,
  setLoader,
  productID,
  defaultStore
  // addToWishlist,
  // addToCompare
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState("")

  // const [selectedProductSize, setSelectedProductSize] = useState(
  //   product.variation ? product.variation[0].size[0].name : ""
  // );
  // const [productStock, setProductStock] = useState(
  //   product.variation ? product.variation[0].size[0].stock : product.stock
  // );
  const [quantityCount, setQuantityCount] = useState(1);

  const onChangeOptions = async (value) => {
    console.log(value)

    setLoader(true)
    let action = constant.ACTION.PRODUCTS + productID + '/' + constant.ACTION.PRICE;
    let param = { "options": [{ id: value.id }] }
    try {
      let response = await WebService.post(action, param);
      // console.log(response);
      if (response) {
        // setProductDetails(response)
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
    }
    setSelectedProductColor(value.id);
  }
  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,
  //   selectedProductColor,
  //   selectedProductSize
  // );

  return (
    <div className="product-details-content ml-70">
      <h2>{product.description.name}</h2>
      <div className="product-details-price">
        {product.discounted !== null ? (
          <Fragment>
            <span>{finalDiscountedPrice}</span>{" "}
            <span className="old">
              {finalProductPrice}
            </span>
          </Fragment>
        ) : (
            <span>{finalProductPrice} </span>
          )}
      </div>
      {/* {product.rating && product.rating > 0 ? ( */}
      <div className="pro-details-rating-wrap">
        <div className="pro-details-rating">
          <Rating ratingValue={product.rating} />
        </div>
      </div>
      {/* ) : (
          ""
        )} */}
      <div className="pro-details-list">
        <p dangerouslySetInnerHTML={{ __html: product.description.description }}></p>
      </div>

      {product.options ? (
        <div className="pro-details-size-color">
          {
            product.options.map((option, key) => {

              return (
                // option.code === 'COLOR' &&
                <div className="pro-details-color-wrap" key={key}>
                  <span>{option.name}</span>
                  <div className="pro-details-color-content" style={{ display: 'flex' }}>
                    {

                      option.optionValues.map((value, index) => {
                        return (
                          <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', marginRight: 15 }} key={index}>
                            <img src={value.image} alt="product-option" />
                            <label className={`pro-details-color-content--single ${value.code}`} key={index} >

                              <input
                                type={option.type}
                                value={value.id}
                                name={option.name}
                                checked={selectedProductColor == '' ? value.defaultValue : value.id === selectedProductColor}
                                onChange={() => onChangeOptions(value)}
                              //    {
                              //   setSelectedProductColor(value.id);
                              //   // setSelectedProductSize(single.size[0].name);
                              //   // setProductStock(single.size[0].stock);
                              //   // setQuantityCount(1);
                              // }}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      })
                      // )
                    }

                  </div>
                </div>
              )
            })
          }
          {/* {

            product.options.map((single) => {
              return (
                single.code === 'SIZE' &&
                <div className="pro-details-size">
                  <span>Size</span>
                  <div className="pro-details-size-content">
                    {
                      single.optionValues.map((singleSize, key) => {
                        return (
                          <label
                            className={`pro-details-size-content--single`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={singleSize.name}
                            // checked={
                            //   singleSize.name === selectedProductSize
                            //     ? "checked"
                            //     : ""
                            // }
                            // onChange={() => {
                            //   setSelectedProductSize(singleSize.name);
                            //   setProductStock(singleSize.stock);
                            //   setQuantityCount(1);
                            // }}
                            />
                            <span className="size-name">{singleSize.name}</span>
                          </label>
                        );

                      })}
                  </div>
                </div>
              )
            })} */}
        </div>
      ) : (
          ""
        )}
      {
        //   product.affiliateLink ? (
        //   <div className="pro-details-quality">
        //     <div className="pro-details-cart btn-hover ml-0">
        //       <a
        //         href={product.affiliateLink}
        //         rel="noopener noreferrer"
        //         target="_blank"
        //       >
        //         Buy Now
        //       </a>
        //     </div>
        //   </div>
        // ) : (
        <div className="pro-details-quality">
          <div className="cart-plus-minus">
            <button onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)} className="dec qtybutton">-</button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button onClick={() => setQuantityCount(quantityCount < product.quantity ? quantityCount + 1 : quantityCount)} className="inc qtybutton">+</button>
          </div>
          <div className="pro-details-cart btn-hover">
            {product.available && product.canBePurchased && product.visible && product.quantity > 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    cartItems,
                    quantityCount,
                    defaultStore,
                    selectedProductColor
                  )
                }>
                {" "}
                Add To Cart{" "}
              </button>
            ) : (
                <button disabled>Out of Stock</button>
              )}
          </div>
          {/* <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => addToWishlist(product, addToast)}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          <div className="pro-details-compare">
            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => addToCompare(product, addToast)}
            >
              <i className="pe-7s-shuffle" />
            </button>
          </div> */}
        </div>
        // )
      }
      <div className="pro-details-meta">
        <span>SKU :</span>
        <ul>
          <li >
            <Link to="">
              {product.sku}
            </Link>
          </li>
        </ul>
      </div>
      {product.categories.length > 0 ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            {product.categories.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={"/category/" + single.description.friendlyUrl}>
                    {single.description.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
          ""
        )}
      {/* {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
          ""
        )} */}

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//dribbble.com">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="//pinterest.com">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="//twitter.com">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="//linkedin.com">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  // addToCompare: PropTypes.func,
  // addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.object,
  // compareItem: PropTypes.array,
  // currency: PropTypes.object,
  // discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.string,
  finalProductPrice: PropTypes.string,
  product: PropTypes.object,
  // wishlistItem: PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  const prodID = ownProps.product.id;
  return {
    productID: prodID,
    cartItems: state.cartData.cartItems,
    defaultStore: state.merchantData.defaultStore
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    addToCart: (
      item,
      addToast,
      cartItem,
      quantityCount,
      defaultStore,
      selectedProductColor
    ) => {
      // console.log(isValidObject(cartItem));

      let index = isValidObject(cartItem) ? cartItem.products.findIndex(cart => cart.id === item.id) : -1;
      dispatch(
        addToCart(
          item,
          addToast,
          cartItem.code,
          index === -1 ? quantityCount : cartItem.products[index].quantity + quantityCount,
          defaultStore,
          selectedProductColor
        )
      );
    },
    // addToWishlist: (item, addToast) => {
    //   dispatch(addToWishlist(item, addToast));
    // },
    // addToCompare: (item, addToast) => {
    //   dispatch(addToCompare(item, addToast));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionInfo);
