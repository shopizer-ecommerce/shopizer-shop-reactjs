import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { isValidObject } from "../../../util/helper";

const MenuCart = ({ cartData, deleteFromCart }) => {
  // let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <div className="shopping-cart-content">
      {isValidObject(cartData) && cartData.products.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.products.map((single, key) => {
              const finalProductPrice = single.originalPrice;
              const finalDiscountedPrice = single.finalPrice;
              // cartTotalPrice += single.price;
              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                      <img alt="" src={single.image.imageUrl} className="img-fluid" />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link to="">
                        {single.description.name}
                      </Link>
                    </h4>
                    <h6>Qty: {single.quantity}</h6>
                    <span>
                      {single.discounted ? finalDiscountedPrice : finalProductPrice}
                    </span>
                    {/* {single.selectedProductColor &&
                      single.selectedProductSize ? (
                        <div className="cart-item-variation">
                          <span>Color: {single.selectedProductColor}</span>
                          <span>Size: {single.selectedProductSize}</span>
                        </div>
                      ) : (
                        ""
                      )} */}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(cartData.code, single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :
              <span className="shop-total">
                {cartData.displayTotal}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              view cart
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              checkout
            </Link>
          </div>
        </Fragment>
      ) : (
          <p className="text-center">No items added to cart</p>
        )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.object,
  // currency: PropTypes.object,
  deleteFromCart: PropTypes.func
};

export default MenuCart;
