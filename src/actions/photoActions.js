import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import {
  UPLOAD_FILES_START,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_FAIL,
} from "./types";

//Upload Files
export const uploadFiles = (files) => (dispatch, getState) => {
  dispatch({ type: UPLOAD_FILES_START });
  axios.post(
    "http://localhost:5000/photos/upload",
    files,
    tokenConfig(getState)
  );
};
