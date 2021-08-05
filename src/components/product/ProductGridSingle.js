import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { setProductID } from "../../redux/actions/productActions";
const ProductGridSingleTwo = ({
  product,
  // currency,
  addToCart,
  // addToWishlist,
  // addToCompare,
  cartData,
  // wishlistItem,
  // compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  titlePriceClass,
  defaultStore,
  setProductID,
  userData
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  // const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = product.originalPrice;
  const finalDiscountedPrice = product.finalPrice;
  const onClickProductDetails = (id) => {
    setProductID(id)
  }
  
  return (
    product.available &&
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${sliderClassName ? sliderClassName : ""}`}>
        <div
          className={`product-wrap-2 ${spaceBottomClass ? spaceBottomClass : ""} ${colorClass ? colorClass : ""} `}>
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.description.friendlyUrl} onClick={() => onClickProductDetails(product.id)}>
                {
                product.images.lenth > 0  &&
                <img src={product.images[0].imageUrl} alt="" />
                }
            </Link>
            {/* {
              product.discount || product.new ? (
                <div className="product-img-badges">
                  {product.discount ? (
                    <span className="pink">-{product.discount}%</span>
                  ) : ("")}
                  {product.new ? <span className="purple">New</span> : ""}
                </div>
              ) : ("")
            } */}

            <div className="product-action-2">
              {/* {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Buy now"
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                  title="Select options"
                >
                  <i className="fa fa-cog"></i>
                </Link>
              ) : product.stock && product.stock > 0 ? ( */}
              <Link
                to={`product/${product.description.friendlyUrl}`} onClick={() => onClickProductDetails(product.id)} title="Select options">
                <i className="fa fa-cog"></i>
              </Link>
              {
                product.available && product.canBePurchased && product.visible && product.quantity > 0 &&
                <button
                  onClick={() => addToCart(product, addToast, cartData, 1, defaultStore, userData)}
                  className="active"
                  // disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title="Add to cart">
                  <i className="fa fa-shopping-cart"></i>{" "}
                </button>
              }

              {/* ) : (
                      <button disabled className="active" title="Out of stock">
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    )} */}

              <button onClick={() => setModalShow(true)} title="Quick View">
                <i className="fa fa-eye"></i>
              </button>

              {/* <button
                className={compareItem !== undefined ? "active" : ""}
                disabled={compareItem !== undefined}
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
                }
                onClick={() => addToCompare(product, addToast)}
              >
                <i className="fa fa-retweet"></i>
              </button> */}
            </div>
          </div>
          <div className="product-content-2">
            <div className={`title-price-wrap-2 ${titlePriceClass ? titlePriceClass : ""}`}>
              <h3>
                <Link to={process.env.PUBLIC_URL + "/product/" + product.description.friendlyUrl} onClick={() => onClickProductDetails(product.id)}>
                  {product.description.name}
                </Link>
              </h3>
              <div className="price-2">
                {product.discounted ? (
                  <Fragment>
                    <span>
                      {finalDiscountedPrice}
                    </span>{" "}
                    <span className="old">
                      {finalProductPrice}
                    </span>
                  </Fragment>
                ) : (
                    <span>{finalProductPrice} </span>
                  )}
              </div>
            </div>
            {/* <div className="pro-wishlist-2">
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
                <i className="fa fa-heart-o" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        defaultStore={defaultStore}
        // currency={currency}
        // discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        // cartitem={cartItem}
        // wishlistitem={wishlistItem}
        // compareitem={compareItem}
        addtocart={addToCart}

        cartData={cartData}
        userData={userData}
        // addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment >
  );
};

ProductGridSingleTwo.propTypes = {
  addToCart: PropTypes.func,
  // addToCompare: PropTypes.func,
  // addToWishlist: PropTypes.func,
  // compareItem: PropTypes.object,
  // currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  // wishlistItem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    defaultStore: state.merchantData.defaultStore
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setProductID: (value) => {
      dispatch(setProductID(value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductGridSingleTwo);
