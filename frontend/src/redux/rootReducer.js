import { combineReducers } from "redux";
import cakeReducer from "./products/reducer";



export const rootReducer = combineReducers({
    cakeReducer,
});