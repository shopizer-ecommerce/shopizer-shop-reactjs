import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart, deleteAllFromCart } from "../../redux/actions/cartActions";
import { setUser } from "../../redux/actions/userAction";
import { getCart } from "../../redux/actions/cartActions";
import { setLocalData, getLocalData } from '../../util/helper';
import { multilanguage } from "redux-multilanguage";
import IdleTimer from 'react-idle-timer';
import constant from '../../util/constant';
import WebService from '../../util/webService';
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
  strings,
  getCart
}) => {
  const pathname = useRouteMatch();
  const history = useHistory();
  const timeout = 1000 * 60 * 30;
  // const [idleTimer, setIdleTimer] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [useDetails, setUseDetails] = useState({});
  useEffect(() => {
    // getCart(cartData.code, userData)
    if (getLocalData('thekey') === window._env_.APP_BASE_URL) {
      setLocalData('thekey', window._env_.APP_BASE_URL)
    } else {
      logout()
      setLocalData('thekey', window._env_.APP_BASE_URL)
    }
    let startTime = new Date(getLocalData('session'));
    let endTime = new Date();
    var diffMs = (endTime - startTime);
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    if (diffMins > 30) {
      logout()
    }
    if (userData) {
      getProfile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])
  const getProfile = async () => {
    let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.PROFILE;
    try {
      let response = await WebService.get(action);
      // console.log(response);
      if (response) {
        setUseDetails(response)
      }
    }
    catch (error) {
      setUser('')
      setLocalData('token', '')
      history.push('/')
    }
  }
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
  const onAction = (e) => {
    setLocalData('session', new Date())
  }

  const onActive = (e) => {
    setLocalData('session', new Date())
  }

  const onIdle = (e) => {
    logout()
  }

  const onSearch = async (e) => {
    setSearchText(e.target.value)
    if (e.target.value.length >= 3) {

      let action = constant.ACTION.SEARCH + constant.ACTION.AUTOCOMPLETE;
      let param = { "query": e.target.value }
      try {
        let response = await WebService.post(action, param);
        if (response) {
          setSearchData(response.values)
          // console.log(response)
        }
      } catch (error) {
        console.log(error, '------------')
      }
    }
  }
  const onSelectedSearch = (data) => {
    setSearchText(data)
    setSearchData([])
  }
  const keyDownFunction = (e) => {
    if (e.keyCode === 13) {
      onSearchClick()
    }
  }
  const onSearchClick = () => {
    history.push('/search/' + searchText)
  }
  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <IdleTimer
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={250}
        timeout={timeout} />
      <div className="same-style header-search">

        < button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>

        <div className="search-content">
          <form >
            <input type="text" placeholder={strings["Search"]} value={searchText} onKeyDown={(e) => keyDownFunction(e)} onChange={e => onSearch(e)} />
            <button className="button-search" onClick={onSearchClick}>
              <i className="pe-7s-search" />
            </button>

          </form>
          {
            searchData.length > 0 &&
            <div className="autoComplete" >
              <div className="shopping-cart-content">

                <ul>
                  {
                    searchData.map((value, index) => {
                      return (
                        <li className="single-shopping-cart" key={index} >
                          <p onClick={() => onSelectedSearch(value)}>{value}</p>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
              {/* <SearchAutoComplete searchData={searchData} /> */}
            </div>
          }
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
              <div className="user-profile">
                <div className="user-name">
                  Welcome {useDetails.firstName} {useDetails.lastName}
                </div>
                <span className="user-email">{useDetails.emailAddress}</span>

              </div>
            }
            {
              userData &&
              <li className="border-line"></li>
            }
            {
              userData &&
              <div style={{ marginTop: 12 }}>
                <li>
                  <Link to={"/my-account"}>{strings["My Account"]}</Link>
                </li>
                <li>
                  <Link to={"/recent-order"}>{strings["Recent Orders"]}</Link>
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
    </div >
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
    },
    getCart: (cartID, userData) => {
      dispatch(getCart(cartID, userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(IconGroup));
