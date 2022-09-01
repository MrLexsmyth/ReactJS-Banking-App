import { combineReducers } from "redux";
import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./init";

export const rootReducer = combineReducers({
    init: authReducer,
    banking: bankingReducer,
})