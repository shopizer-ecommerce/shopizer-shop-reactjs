import WebService from '../../util/webService';
import constant from '../../util/constant';
export const GET_SHOPIZER_CART_ID = "GET_SHOPIZER_CART_ID";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

//add to cart
export const addToCart = (
  item,
  addToast,
  quantityCount,
  // selectedProductColor,
  // selectedProductSize
) => {
  return async dispatch => {
    console.log(item)

    // if (userData) {
    //   action = Action.CUSTOMERS + userData.id + '/' + Action.CARTS;
    // } else {
    // }

    try {
      let action = constant.ACTION.CART;
      let param = { "product": item.id, "quantity": 1 }
      let response = await WebService.post(action, param);
      console.log(response)
      dispatch(setShopizerCartID(response.code))
      if (addToast) {
        addToast("Added To Cart", { appearance: "success", autoDismiss: true });
      }
      dispatch(getCart(response.code));
      // dispatch({
      //   type: GET_CART,
      //   payload: response
      // });
    } catch (error) {
    }
    // debugger
    // if (addToast) {
    //   addToast("Added To Cart", { appearance: "success", autoDismiss: true });
    // }
    // dispatch({
    //   type: ADD_TO_CART,
    //   payload: {
    //     ...item,
    //     quantity: quantityCount
    //   }
    // });
  };
};

//Get cart

export const getCart = (cartID) => {
  return async dispatch => {
    try {
      let action = constant.ACTION.CART + cartID;
      let response = await WebService.get(action);
      console.log(response)

      // dispatch({
      //   type: GET_CART,
      //   payload: response
      // });
    } catch (error) {
    }
  }
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
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
    }
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};
//delete all from cart
export const deleteAllFromCart = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: DELETE_ALL_FROM_CART });
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
