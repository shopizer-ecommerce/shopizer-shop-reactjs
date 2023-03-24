import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { setLoader } from "../../redux/actions/loaderActions";
import { connect } from "react-redux";
// import Rating from "../../components/product/sub-components/ProductRating";
import StarRatings from 'react-star-ratings';
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { useToasts } from "react-toast-notifications";
import * as moment from 'moment';
import { multilanguage } from "redux-multilanguage";
// import { Scrollbars } from 'react-custom-scrollbars';
import ReactPaginate from 'react-paginate';
const ProductDescriptionTab = ({ strings, spaceBottomClass, product, review, userData }) => {
  const [ratingValue, setRatingValue] = useState(0)
  const [ratingMessage, setRatingMessage] = useState('')
  const [offset, setOffset] = useState(1);
  // const [tempReview, setTempReview] = useState([])
  const pageLimit = 5;
  const { addToast } = useToasts();
  // const getRating = (ratingValue) => {
  //   let rating = [];
  //   for (let i = 0; i <= ratingValue - 1; i++) {
  //     rating.push(i);
  //   }
  //   return rating;
  // }
  useEffect(() => {

  }, [offset])
  const onClickSubmit = async () => {
    setLoader(true)
    try {
      let action = constant.ACTION.VERSION_V1 + constant.ACTION.AUTH + constant.ACTION.PRODUCTS + product.id + '/reviews'
      let param = {
        "customerId": userData.id,
        "date": moment().format('YYYY-MM-DD'),
        "description": ratingMessage,
        'language': 'en',
        'productId': product.id,
        'rating': ratingValue
      }
      let response = await WebService.post(action, param);
      if (response) {
        setRatingMessage('')
        setRatingValue(0)
        addToast("Your review has been posted", { appearance: "success", autoDismiss: true });
      }
      setLoader(false)
    } catch (error) {
      addToast("A review already exist for this customer and product", { appearance: "error", autoDismiss: true });
      // setLoader(false)
    }
  }
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              {/* <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="productDescription">{strings["Description"]}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">{strings["Reviews"]}({review.length})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              {/* <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>

                    <li>
                      <span>Weight</span> {product.productSpecifications.weight} Pounds
                    </li>

                    <li>
                      <span>{strings["Package size"]}</span>{product.productSpecifications.length}{" "} x {product.productSpecifications.width}{" "}
                      x {product.productSpecifications.height} Inches{" "}
                    </li>
                  </ul>
                </div>
              </Tab.Pane> */}
              <Tab.Pane eventKey="productDescription">
                <p dangerouslySetInnerHTML={{ __html: product.description.description }}></p>
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    {
                      product.productSpecifications.weight &&
                      <li>
                        <span>{strings["Weight"]}</span> {product.productSpecifications.weight}
                      </li>
                    }
                    {
                      product.productSpecifications.length && product.productSpecifications.width && product.productSpecifications.height &&
                      <li>
                        <span>{strings["Package size"]}</span>{product.productSpecifications.length || 0}{" "} x {product.productSpecifications.width || 0}{" "}
                        x {product.productSpecifications.height || 0}
                      </li>
                    }
                    {
                      product.properties.map((value, i) => {
                        return <li key={i}>
                          <span><b>{value.property.name}</b></span> {value.propertyValue.name}
                        </li>
                      })
                    }
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  {
                    review.length > 0 ?
                      <div className="col-lg-7">
                        {
                          review.slice((offset - 1) * pageLimit, offset * pageLimit).map((a, key) => {
                            return (
                              <div className="review-wrapper" key={key}>
                                <div className="single-review">
                                  <div className="review-content">
                                    <div className="review-top-wrap">
                                      <div className="review-left">
                                        <div className="review-name">
                                          <h4>{a.customer.firstName} {a.customer.lastName}</h4>
                                        </div>
                                        <div className="pro-details-rating-wrap">
                                          <div className="pro-details-rating">
                                            <StarRatings
                                              rating={a.rating}
                                              starRatedColor="#ffa900"
                                              starDimension="17px"
                                              starSpacing="1px"
                                              numberOfStars={5}
                                              name='view-rating'
                                            />

                                          </div>
                                        </div>
                                      </div>
                                      <div className="review-left">
                                        <button className="review-date">{a.date}</button>
                                      </div>
                                    </div>
                                    <div className="review-bottom">
                                      <p>
                                        {a.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })

                        }
                        <div className="pro-pagination-style text-center mt-30">
                          <ReactPaginate
                            previousLabel={'«'}
                            nextLabel={'»'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={review.length / 5}
                            onPageChange={(e) => setOffset(e.selected + 1)}
                            containerClassName={'mb-0 mt-0'}
                            activeClassName={'page-item active'}
                          />
                        </div>
                        {/* </Scrollbars> */}
                      </div>
                      : <div className="col-lg-7">
                        <div className="item-empty-area text-center">
                          <div className="item-empty-area__icon mb-30">
                            <i className="pe-7s-star"></i>
                          </div>
                          <div className="item-empty-area__text">
                            {strings["No items found in reviews"]}<br />{" "}
                          </div>
                        </div>
                      </div>
                  } {
                    userData ?
                      <div className="col-lg-5">
                        <div className="ratting-form-wrapper pl-50">
                          <h3>{strings["Add a Review"]}</h3>
                          <div className="ratting-form">
                            <form>
                              <div className="star-box">
                                <span>{strings["Your rating"]}:</span>
                                <StarRatings
                                  rating={ratingValue}
                                  starRatedColor="#ffa900"
                                  starDimension="17px"
                                  starSpacing="1px"
                                  starHoverColor="#ffa900"
                                  changeRating={(e) => setRatingValue(e)}
                                  numberOfStars={5}
                                  name='rating'
                                />

                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="rating-form-style form-submit">
                                    <textarea
                                      name="Your Review"
                                      placeholder={strings["Message"]}
                                      defaultValue={""}
                                      onChange={(e) => setRatingMessage(e.target.value)}
                                    />
                                    <input type="button" defaultValue={strings["Submit"]} onClick={onClickSubmit} disabled={ratingMessage === '' || ratingValue === 0} />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      :
                      <div className="col-lg-5">
                        <div className="checkout-heading">
                          <Link to={"/login"}>{strings["Returning customer ? Click here to login"]}</Link>
                        </div>
                      </div>

                  }

                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  product: PropTypes.object,
  review: PropTypes.array,
  spaceBottomClass: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData.userData,
    currentLanguageCode: state.multilanguage.currentLanguageCode,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(ProductDescriptionTab));
// export default ProductDescriptionTab;
