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
  CREATE_SUBCONTAINER_START,
  CREATE_SUBCONTAINER_SUCCESS,
  CREATE_SUBCONTAINER_FAIL,
  GET_SUBCONTAINERS_START,
  GET_SUBCONTAINERS_SUCCESS,
  GET_SUBCONTAINERS_FAIL,
  CLEAR_SUBCONTAINERS
} from "../actions/types";

const initialState = {
  topLevelMarkers: [],
  activeMarker: { isActive: false, marker: null },
  currentParent: null,
  subContainers: [],
  isFetching: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_MARKERS_START:
      return {
        ...state,
        isFetching: true
      };
    case GET_TOP_MARKERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topLevelMarkers: action.payload
      };
    case GET_TOP_MARKERS_FAIL:
      return {
        ...state,
        isFetching: false
      };
    case MARKER_ADD_START:
      return {
        ...state,
        isFetching: true
      };
    case MARKER_ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topLevelMarkers: [...state.topLevelMarkers, action.payload]
      };
    case MARKER_ADD_FAIL:
      return {
        ...state,
        isFetching: false
      };
    case SET_ACTIVE_MARKER:
      return {
        ...state,
        activeMarker: {
          isActive: true,
          marker: action.payload
        }
      };
    case UNSET_ACTIVE_MARKER:
      return {
        ...state,
        activeMarker: {
          isActive: false,
          marker: null
        }
      };
    case SET_CURRENT_PARENT:
      let parent = { id: action.payload };
      parent.subContainers = state.topLevelMarkers.find(marker => {
        return marker._id === parent.id;
      }).subContainers;
      return {
        ...state,
        currentParent: parent
      };
    case UNSET_CURRENT_PARENT:
      return {
        ...state,
        currentParent: null
      };
    case CREATE_SUBCONTAINER_START:
      return {
        ...state,
        isFetching: true
      };
    case CREATE_SUBCONTAINER_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case CREATE_SUBCONTAINER_FAIL:
      return {
        ...state,
        isFetching: false
      };
    case GET_SUBCONTAINERS_START:
      return {
        ...state,
        isFetching: true
      };
    case GET_SUBCONTAINERS_SUCCESS:
      return {
        ...state,
        subContainers: action.payload,
        isFetching: false
      };
    case GET_SUBCONTAINERS_FAIL:
      return {
        ...state,
        isFetching: false
      };
    case CLEAR_SUBCONTAINERS:
      return {
        ...state,
        subContainers: []
      };
    default:
      return state;
  }
}
