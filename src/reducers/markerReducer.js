import {
  GET_TOP_MARKERS_START,
  GET_TOP_MARKERS_SUCCESS,
  GET_TOP_MARKERS_FAIL,
  MARKER_ADD_START,
  MARKER_ADD_FAIL,
  MARKER_ADD_SUCCESS,
  SET_ACTIVE_MARKER,
  UNSET_ACTIVE_MARKER,
  SET_CURRENT_PARENT,
  UNSET_CURRENT_PARENT,
} from "../actions/types";

const initialState = {
  topLevelMarkers: [],
  activeMarker: { isActive: false, marker: null },
  currentParent: null,
  isFetching: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOP_MARKERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TOP_MARKERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topLevelMarkers: action.payload,
      };
    case GET_TOP_MARKERS_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    case MARKER_ADD_START:
      return {
        ...state,
        isFetching: true,
      };
    case MARKER_ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topLevelMarkers: [...state.topLevelMarkers, action.payload],
      };
    case MARKER_ADD_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    case SET_ACTIVE_MARKER:
      return {
        ...state,
        activeMarker: {
          isActive: true,
          marker: action.payload,
        },
      };
    case UNSET_ACTIVE_MARKER:
      return {
        ...state,
        activeMarker: {
          isActive: false,
          marker: null,
        },
      };
    case SET_CURRENT_PARENT:
      let parent = { id: action.payload };
      return {
        ...state,
        currentParent: parent,
      };
    case UNSET_CURRENT_PARENT:
      return {
        ...state,
        currentParent: null,
      };
    default:
      return state;
  }
}
