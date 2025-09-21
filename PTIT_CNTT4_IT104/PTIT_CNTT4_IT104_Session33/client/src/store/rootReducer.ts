import { combineReducers } from "redux";
import { reducerCart } from "./reducer/reducerCart";

export const rootReducer = combineReducers({
    cart: reducerCart
})