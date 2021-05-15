import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    cart: cartReducer
})