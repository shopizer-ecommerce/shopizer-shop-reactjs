import WebService from '../../util/webService';
import constant from '../../util/constant';

import { setLoader } from "../actions/loaderActions";
import { setLocalData, getLocalData } from '../../util/helper';
import Cookies from 'universal-cookie';
export const GET_SHOPIZER_CART_ID = "GET_SHOPIZER_CART_ID";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

//add to cart
export const addToCart = (item, addToast, cartId, quantityCount, defaultStore, userData, selectedProductOptions) => {
  return async dispatch => {
    dispatch(setLoader(true))
    try {
      let action;
      let param;
      let response;
      let message;
      console.log('Item ' + cartId + " quantity " + quantityCount);
      if (selectedProductOptions !== undefined) {
        param = { "attributes": selectedProductOptions, "product": item.id, "quantity": quantityCount }
      } else {
        param = { "product": item.id, "quantity": quantityCount }
      }
      console.log('Cart parameters ' + JSON.stringify(param));
      if (cartId) {
        message = "Updated Cart"
        action = constant.ACTION.CART + cartId + '?store=' + window._env_.APP_MERCHANT ;
        response = await WebService.put(action, param);
      } else {
        message = "Added Cart"
        action = constant.ACTION.CART + '?store=' + window._env_.APP_MERCHANT 
        response = await WebService.post(action, param);
      }

      //refresh cart
      console.log('Cart response' + JSON.stringify(response));
      if (response) {
        dispatch(setShopizerCartID(response.code))
        dispatch(setLoader(false))
        if (userData) {
          setTimeout(() => {
            dispatch(getCart(response.code, userData));
          }, 2000);

        } else {
          dispatch(getCart(response.code, userData));
        }
        if (addToast) {
          addToast(message, { appearance: "success", autoDismiss: true });
        }
      }
    } catch (error) {
      dispatch(setLoader(false))
    }

  };
};

//Get cart

export const getCart = (cartID, userData) => {
  return async dispatch => {
    // if (cartID) {
    try {
      let action;
      if (userData) {
        if (cartID) {
          action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.CARTS + '?cart=' + cartID + '&lang=' + JSON.parse(getLocalData('redux_localstorage_simple')).multilanguage.currentLanguageCode;
        } else {
          action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.CARTS + '?&lang=' + JSON.parse(getLocalData('redux_localstorage_simple')).multilanguage.currentLanguageCode;
        }
      } else {
        if (cartID) {
          action = constant.ACTION.CART + cartID + '?lang=' + JSON.parse(getLocalData('redux_localstorage_simple')).multilanguage.currentLanguageCode
        }
      }

      let response = await WebService.get(action);
      dispatch(setShopizerCartID(response.code))
      dispatch({
        type: GET_CART,
        payload: response
      });

    } catch (error) {
      console.log('Cart action response ' + error);
      dispatch(deleteAllFromCart())
    }
  }
  // }
}
export const setShopizerCartID = (id) => {
  //set local data
  // set cart id in cookie
  var cart_cookie = window._env_.APP_MERCHANT + '_shopizer_cart';
  const cookies = new Cookies();
  cookies.set(cart_cookie, id, { path: '/', maxAge: 20000000 });//6 months
  setLocalData(GET_SHOPIZER_CART_ID,id);
  return dispatch => {
    dispatch({
      type: GET_SHOPIZER_CART_ID,
      payload: id
    });
  }
}

export const getShopizerCartID = () => {
  //set local data
  // set cart id in cookie
  var cart_cookie = window._env_.APP_MERCHANT + '_shopizer_cart';
  const cookies = new Cookies();
  let cookie = cookies.get(cart_cookie);
  if(cookie) {
    getCart(cookie, null);
  }

}




//decrease from cart
export const decreaseQuantity = (item, addToast) => {
  console.log('decrease ' + JSON.stringify(item));
  return dispatch => {
    // if (addToast) {
    //   addToast("Item Decremented From Cart", {
    //     appearance: "warning",
    //     autoDismiss: true
    //   });
    // }
    // dispatch({ type: DECREASE_QUANTITY, payload: item });
    
  };
};

export const increaseQuantity = (item, addToast) => {
  console.log('increase ' + JSON.stringify(item));
  return dispatch => {
    // if (addToast) {
    //   addToast("Item Decremented From Cart", {
    //     appearance: "warning",
    //     autoDismiss: true
    //   });
    // }
    // dispatch({ type: DECREASE_QUANTITY, payload: item });
    
  };
};


//delete from cart
export const deleteFromCart = (cartID, item, defaultStore, addToast) => {
  return async dispatch => {
    dispatch(setLoader(true))
    try {
      let action = constant.ACTION.CART + cartID + '/' + constant.ACTION.PRODUCT + item.id + '?store=' + window._env_.APP_MERCHANT;
      await WebService.delete(action);

      dispatch({
        type: DELETE_FROM_CART,
        payload: item
      });
      dispatch(setLoader(false))
      if (addToast) {
        addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
      }

      // dispatch(getCart(cartID));
    } catch (error) {
      console.log('Error removing from cart ' + cartID);
      dispatch(setLoader(false))
    }
  };
};
//delete all from cart
export const deleteAllFromCart = (orderID) => {
  return dispatch => {
    // if (addToast) {
    //   addToast("Removed All From Cart", {
    //     appearance: "error",
    //     autoDismiss: true
    //   });
    // }
    dispatch({ type: DELETE_ALL_FROM_CART, payload: orderID });
  };
};

// get stock of cart item
export const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation
      .filter(single => single.color === color)[0]
      .size.filter(single => single.name === size)[0].stock;
  }
};
