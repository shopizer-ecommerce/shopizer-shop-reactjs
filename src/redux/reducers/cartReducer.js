// import uuid from "uuid/v4";
import Cookies from 'universal-cookie';
import { removeLocalData } from '../../util/helper';

import {
  // ADD_TO_CART,
  DECREASE_QUANTITY,
  // INCREASE_QUANTITY,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
  GET_CART,
  GET_SHOPIZER_CART_ID
} from "../actions/cartActions";

const initState = {
  cartItems: {},
  cartID: '',
  cartCount: 0,
  orderID: ''

};

const cartReducer = (state = initState, action) => {
  const cartItems = state,
    product = action.payload;
  if (action.type === GET_SHOPIZER_CART_ID) {
    return {
      ...state,
      cartID: action.payload
    };
  }
  if (action.type === GET_CART) {
    return {
      ...state,
      cartItems: Object.assign({}, action.payload),
      cartCount: action.payload.quantity
    }
  }


  if (action.type === DECREASE_QUANTITY) {
    console.log('Decrease cart qty')
    // if (product.quantity === 1) {
    //   const remainingItems = (cartItems, product) =>
    //     cartItems.filter(
    //       cartItem => cartItem.cartItemId !== product.cartItemId
    //     );
    //   return remainingItems(cartItems, product);
    // } else {
    //   return cartItems.map(item =>
    //     item.cartItemId === product.cartItemId
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   );
    // }
  }

  if (action.type === DELETE_FROM_CART) {
    let index = cartItems.cartItems.products.findIndex(order => order.id === product.id);
    cartItems.cartItems.products.splice(index, 1);
    if (cartItems.cartItems.products.length === 0) {
      //remove from local storage
      //remove from cookie
      var cart_cookie = window._env_.APP_MERCHANT + '_shopizer_cart';
      const cookies = new Cookies();
      cookies.remove(cart_cookie);
      removeLocalData(GET_SHOPIZER_CART_ID);
      return {
        ...state,
        cartItems: {},
        cartCount: cartItems.cartItems.products.length,
        cartID: ''
      }
    } else {
      return {
        ...state,
        cartCount: cartItems.cartItems.products.length,
        cartItems: cartItems.cartItems,
      }
    }

    // return remainingItems(cartItems, product);
  }

  if (action.type === DELETE_ALL_FROM_CART) {
    var cart_cookie1 = window._env_.APP_MERCHANT + '_shopizer_cart';
    const cookies = new Cookies();
    cookies.remove(cart_cookie1);
    removeLocalData(cart_cookie1);
    return {
      ...state,
      cartItems: {},
      cartCount: 0,
      cartID: '',
      orderID: action.payload,
    }
  }

  return state;
};

export default cartReducer;
