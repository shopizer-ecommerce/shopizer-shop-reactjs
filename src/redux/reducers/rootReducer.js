
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import storeReducer from "./storeReducer";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import contentReducer from "./contentReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  // currencyData: currencyReducer,
  productData: productReducer,
  merchantData: storeReducer,
  cartData: cartReducer,
  loading: loaderReducer,
  userData: userReducer,
  content: contentReducer
});

export default rootReducer;
