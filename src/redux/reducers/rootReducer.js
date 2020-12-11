// import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
// import wishlistReducer from "./wishlistReducer";
// import compareReducer from "./compareReducer";
import storeReducer from "./storeReducer";
import loaderReducer from "./loaderReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  // currencyData: currencyReducer,
  productData: productReducer,
  merchantData: storeReducer,
  cartData: cartReducer,
  loading: loaderReducer
  // wishlistData: wishlistReducer,
  // compareData: compareReducer
});

export default rootReducer;
