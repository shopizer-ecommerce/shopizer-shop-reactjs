import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFromCart, deleteAllFromCart } from "../../redux/actions/cartActions";
import { setUser } from "../../redux/actions/userAction";
import { getCart } from "../../redux/actions/cartActions";
import { setLocalData, getLocalData } from '../../util/helper';
import { multilanguage } from "redux-multilanguage";
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
  const history = useHistory();
  // const [idleTimer, setIdleTimer] = useState(null);
  // const [searchData, setSearchData] = useState([]);
  // const [searchText, setSearchText] = useState('');
  const [setUseDetails] = useState({});
  useEffect(() => {
    // getCart(cartData.code, userData)
    if (getLocalData('thekey') === window._env_.APP_BASE_URL) {
      setLocalData('thekey', window._env_.APP_BASE_URL)
    } else {
      logout()
      setLocalData('thekey', window._env_.APP_BASE_URL)
    }
    // let startTime = new Date(getLocalData('session'));
    // let endTime = new Date();
    // var diffMs = (endTime - startTime);
    // var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    // if (diffMins > 30) {
    //   logout()
    // }
    if (userData) {
      getProfile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])
  const getProfile = async () => {
    let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.PROFILE;
    try {
      let response = await WebService.get(action);
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
  const logout = () => {
    setUser('')
    setLocalData('token', '')
    deleteAllFromCart()
  }

  // const onSearch = async (e) => {
  //   setSearchText(e.target.value)
  //   if (e.target.value.length >= 3) {

  //     let action = constant.ACTION.SEARCH + constant.ACTION.AUTOCOMPLETE;
  //     let param = { "query": e.target.value }
  //     try {
  //       let response = await WebService.post(action, param);
  //       if (response) {
  //         setSearchData(response.values)
  //       }
  //     } catch (error) {
  //       console.log(error, '------------')
  //     }
  //   }
  // }
  // const onSelectedSearch = (data) => {
  //   setSearchText(data)
  //   setSearchData([])
  // }
  // const keyDownFunction = (e) => {
  //   if (e.keyCode === 13) {
  //     onSearchClick()
  //   }
  // }
  // const onSearchClick = () => {
  //   history.push('/search/' + searchText)
  // }
  return (
    <span></span>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    cartData: state.cartData.cartItems,
    cartCount: state.cartData.cartCount,
    userData: state.userData.userData
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