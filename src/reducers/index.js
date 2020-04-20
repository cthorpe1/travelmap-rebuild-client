import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import markerReducer from "./markerReducer";
import subcontainerReducer from "./subcontainerReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  markers: markerReducer,
  subContainers: subcontainerReducer,
  photos: photosReducer,
});
