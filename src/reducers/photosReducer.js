import {
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_START,
  UPLOAD_FILES_FAIL,
} from "../actions/types";

const initialState = {
  filesToUpload: [],
  uploading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILES_START:
      return {
        ...state,
        uploading: true,
      };
    case UPLOAD_FILES_SUCCESS:
      return {
        ...state,
        uploading: false,
        filesToUpload: action.payload,
      };
    case UPLOAD_FILES_FAIL:
      return {
        ...state,
        uploading: false,
      };
    default:
      return state;
  }
}
