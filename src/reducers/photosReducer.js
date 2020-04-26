import {
  UPLOAD_PHOTOS_SUCCESS,
  UPLOAD_PHOTOS_START,
  UPLOAD_PHOTOS_FAIL,
} from "../actions/types";

const initialState = {
  photosToUpload: [],
  uploading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PHOTOS_START:
      return {
        ...state,
        uploading: true,
      };
    case UPLOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        uploading: false,
        photosToUpload: action.payload,
      };
    case UPLOAD_PHOTOS_FAIL:
      return {
        ...state,
        uploading: false,
      };
    default:
      return state;
  }
}
