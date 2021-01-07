import PropTypes from "prop-types";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart, deleteAllFromCart } from "../../redux/actions/cartActions";
import { setUser } from "../../redux/actions/userAction";
import { setLocalData } from '../../util/helper';
import { multilanguage } from "redux-multilanguage";
const IconGroup = ({
  // currency,
  cartData,
  cartCount,
  // wishlistData,
  // compareData,
  deleteFromCart,
  iconWhiteClass,
  userData,
  setUser,
  deleteAllFromCart,
  strings
}) => {
  const pathname = useRouteMatch();
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const logout = () => {
    setUser('')
    setLocalData('token', '')
    deleteAllFromCart()
  }
  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        {
          pathname.url !== '/checkout' &&
          <button className="search-active" onClick={e => handleClick(e)}>
            <i className="pe-7s-search" />
          </button>
        }

        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        {
          pathname.url !== '/checkout' &&
          <button
            className="account-setting-active"
            onClick={e => handleClick(e)}
          >
            <i className="pe-7s-user-female" />
          </button>
        }
        <div className="account-dropdown">
          <ul>
            {
              !userData &&
              <div>
                <li>
                  <Link to={"/login"}>{strings["Login"]}</Link>
                </li>
                <li>
                  <Link to={"/register"}>{strings["Register"]}</Link>
                </li>
              </div>
            }
            {
              userData &&
              <div>
                <li>
                  <Link to={"/my-account"}>{strings["My Account"]}</Link>
                </li>
                <li>
                  <Link to={"/my-account"}>{strings["Recent Orders"]}</Link>
                </li>
                <li>
                  <Link to={"/login"} onClick={logout}>{strings["Logout"]}</Link>
                </li>
              </div>
            }
          </ul>
        </div>
      </div>
      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div> */}
      {/* <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div> */}
      {
        pathname.url !== '/checkout' &&
        <div className="same-style cart-wrap d-none d-lg-block">
          <button className="icon-cart" onClick={e => handleClick(e)}>
            <i className="pe-7s-shopbag" />
            <span className="count-style">
              {cartCount}
            </span>
          </button>
          {/* menu cart */}
          <MenuCart
            cartData={cartData}
            // currency={currency}
            deleteFromCart={deleteFromCart}
          />
        </div>
      }
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartCount}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.object,
  // compareData: PropTypes.array,
  // currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  // wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    // currency: state.currencyData,
    cartData: state.cartData.cartItems,
    cartCount: state.cartData.cartCount,
    userData: state.userData.userData
    // wishlistData: state.wishlistData,
    // compareData: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (cartId, item, defaultStore, addToast) => {
      dispatch(deleteFromCart(cartId, item, defaultStore, addToast));
    },
    setUser: (data) => {
      dispatch(setUser(data));
    },
    deleteAllFromCart: () => {
      dispatch(deleteAllFromCart())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(IconGroup));
