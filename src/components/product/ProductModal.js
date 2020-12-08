import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { Modal } from "react-bootstrap";
import Rating from "./sub-components/ProductRating";
import { connect } from "react-redux";

function ProductModal(props) {
  const { product } = props;
  // const { currency } = props;
  // const { discountedprice } = props;
  const { finalproductprice } = props;
  const { finaldiscountedprice } = props;

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const [selectedProductColor, setSelectedProductColor] = useState();
  const [selectedProductSize, setSelectedProductSize] = useState();
  // const [productStock, setProductStock] = useState();
  const [quantityCount, setQuantityCount] = useState(1);

  // const wishlistItem = props.wishlistitem;
  // const compareItem = props.compareitem;

  const addToCart = props.addtocart;
  // const addToWishlist = props.addtowishlist;
  // const addToCompare = props.addtocompare;

  const addToast = props.addtoast;
  // const cartItems = props.cartitems;

  // const productCartQty = 0

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: false
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: false,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-large-image-wrapper">
                <Swiper {...gallerySwiperParams}>
                  {product.images.length > 0 &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={single.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                  {product.images.length > 1 &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={single.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{product.description.name}</h2>
                <div className="product-details-price">
                  {product.discounted ? (
                    <Fragment>
                      <span>
                        {finaldiscountedprice}
                      </span>{" "}
                      <span className="old">
                        {finalproductprice}
                      </span>
                    </Fragment>
                  ) : (<span>{finalproductprice} </span>)}
                </div>

                <div className="pro-details-rating-wrap">
                  <div className="pro-details-rating">
                    <Rating ratingValue={product.rating} />
                  </div>
                </div>
                <div className="pro-details-list">
                  <p dangerouslySetInnerHTML={{ __html: product.description.description }}></p>
                </div>

                {product.options ? (
                  <div className="pro-details-size-color">
                    <div className="pro-details-color-wrap">
                      <span>Color</span>
                      <div className="pro-details-color-content">
                        {product.options.map((option, key) => {
                          return (
                            option.code == 'COLOR' &&
                            option.optionValues.map((value, index) => {
                              return (<label className={`pro-details-color-content--single ${value.code}`} key={index}>
                                <input
                                  type="radio"
                                  value={value.id}
                                  name="product-color"
                                  checked={value.defaultValue}
                                  onChange={() => {
                                    // setSelectedProductColor(value.color);
                                    // setSelectedProductSize(value.size[0].name);
                                    // setProductStock(value.size[0].stock);
                                    // setQuantityCount(1);
                                  }}
                                />

                                <span className="checkmark"></span>
                              </label>
                              )
                            })

                          );


                        })}
                      </div>
                    </div>
                    <div className="pro-details-size">
                      <span>Size</span>
                      <div className="pro-details-size-content">
                        {product.options &&
                          product.options.map(single => {
                            single.code == 'SIZE' &&
                              single.optionValues.map((singleSize, key) => {
                                return (
                                  <label
                                    className={`pro-details-size-content--single`} key={key} >
                                    <input
                                      type="radio"
                                      value={singleSize.name}
                                      checked={
                                        singleSize.name ===
                                          selectedProductSize
                                          ? "checked"
                                          : ""
                                      }
                                      onChange={() => {
                                        // setSelectedProductSize(
                                        //   singleSize.name
                                        // );
                                        // setProductStock(singleSize.stock);
                                        // setQuantityCount(1);
                                      }}
                                    />
                                    <span className="size-name">
                                      {singleSize.name}
                                    </span>
                                  </label>
                                );
                              })
                          })}
                      </div>
                    </div>
                  </div>
                ) : (
                    ""
                  )}
                {
                  //   product.affiliateLink ? (
                  //   <div className="pro-details-quality">
                  //     <div className="pro-details-cart btn-hover">
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
                      <button onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)} className="dec qtybutton">
                        -
                      </button>
                      <input className="cart-plus-minus-box" type="text" value={quantityCount} readOnly />
                      <button onClick={() => setQuantityCount(quantityCount < product.quantity ? quantityCount + 1 : quantityCount)} className="inc qtybutton" >
                        +
                      </button>
                    </div>
                    <div className="pro-details-cart btn-hover">
                      {product.available ? (
                        <button
                          onClick={() =>
                            addToCart(
                              product,
                              addToast,
                              quantityCount,
                              selectedProductColor,
                              selectedProductSize
                            )
                          }
                        // disabled={productCartQty >= productStock}
                        >Add To Cart</button>
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
                      </div> */}
                    {/* <div className="pro-details-compare">
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
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

ProductModal.propTypes = {
  addtoast: PropTypes.func,
  addtocart: PropTypes.func,
  // addtocompare: PropTypes.func,
  // addtowishlist: PropTypes.func,
  // cartitems: PropTypes.array,
  // compareitem: PropTypes.object,
  // currency: PropTypes.object,
  // discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.string,
  finalproductprice: PropTypes.string,
  onHide: PropTypes.func,
  product: PropTypes.object,
  show: PropTypes.bool,
  // wishlistitem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    // cartitems: state.cartData
  };
};

export default connect(mapStateToProps)(ProductModal);
