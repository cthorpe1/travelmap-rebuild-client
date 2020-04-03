import {
    CREATE_SUBCONTAINER_START,
    CREATE_SUBCONTAINER_SUCCESS,
    CREATE_SUBCONTAINER_FAIL,
    GET_SUBCONTAINERS_START,
    GET_SUBCONTAINERS_SUCCESS,
    GET_SUBCONTAINERS_FAIL,
    CLEAR_SUBCONTAINERS,
    DELETE_SUBCONTAINER_START,
    DELETE_SUBCONTAINER_SUCCESS,
    DELETE_SUBCONTAINER_FAIL
  } from "../actions/types";
  
  const initialState = {
    subContainers: [],
    fetchingSubcontainers: null
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_SUBCONTAINER_START:
        return {
          ...state,
          fetchingSubcontainers: true
        };
      case CREATE_SUBCONTAINER_SUCCESS:
        return {
          ...state,
          fetchingSubcontainers: false
        };
      case CREATE_SUBCONTAINER_FAIL:
        return {
          ...state,
          fetchingSubcontainers: false
        };
      case GET_SUBCONTAINERS_START:
        return {
          ...state,
          fetchingSubcontainers: true
        };
      case GET_SUBCONTAINERS_SUCCESS:
        return {
          ...state,
          subContainers: action.payload,
          fetchingSubcontainers: false
        };
      case GET_SUBCONTAINERS_FAIL:
        return {
          ...state,
          fetchingSubcontainers: false
        };
      case CLEAR_SUBCONTAINERS:
        return {
          ...state,
          subContainers: []
        };
      case DELETE_SUBCONTAINER_START:
        return {
          ...state,
          fetchingSubcontainers: true
        };
      case DELETE_SUBCONTAINER_SUCCESS:
        return {
          ...state,
          fetchingSubcontainers: false
        };
      case DELETE_SUBCONTAINER_FAIL:
        return {
          ...state,
          fetchingSubcontainers: false
        };
      default:
        return state;
    }
  }
  