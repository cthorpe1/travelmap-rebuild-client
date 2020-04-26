import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import {
  UPLOAD_PHOTOS_START,
  UPLOAD_PHOTOS_SUCCESS,
  UPLOAD_PHOTOS_FAIL,
} from "./types";

//Upload Files
export const uploadPhotos = (photos) => (dispatch, getState) => {
  dispatch({ type: UPLOAD_PHOTOS_START });
  axios.post(
    "http://localhost:5000/photos/upload",
    photos,
    tokenConfig(getState)
  );
};

//Get photos for current subcontainer
export const getPhotos = (currentParent) => (dispatch, getState) => {
  axios.get(
    `http://localhost:5000/photos/${currentParent}`,
    tokenConfig(getState)
  );
};
