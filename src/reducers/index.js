import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import markerReducer from "./markerReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  markers: markerReducer
});
