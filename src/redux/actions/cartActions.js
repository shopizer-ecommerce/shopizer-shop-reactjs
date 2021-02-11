import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../actions/loaderActions";
import { getLocalData } from '../../util/helper';
export const GET_SHOPIZER_CART_ID = "GET_SHOPIZER_CART_ID";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
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
      console.log(cartId, '************ cartId *********')
      if (selectedProductOptions !== undefined) {
        param = { "attributes": selectedProductOptions, "product": item.id, "quantity": quantityCount }
      } else {
        param = { "product": item.id, "quantity": quantityCount }
      }
      if (cartId) {
        message = "Updated To Cart"
        action = constant.ACTION.CART + cartId + '?store=' + defaultStore;
        response = await WebService.put(action, param);
      } else {
        message = "Added To Cart"
        // if (userData) {
        //   action = constant.ACTION.CUSTOMERS + userData.id + '/' + constant.ACTION.CART;
        // } else {
        action = constant.ACTION.CART + '?store=' + defaultStore
        // }
        response = await WebService.post(action, param);
      }

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
  return dispatch => {
    dispatch({
      type: GET_SHOPIZER_CART_ID,
      payload: id
    });
  }
}
//decrease from cart
export const decreaseQuantity = (item, addToast) => {
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
      let action = constant.ACTION.CART + cartID + '/' + constant.ACTION.PRODUCT + item.id + '?store=' + defaultStore;
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
      console.log('Error removing from cart ');
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
