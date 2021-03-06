import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import {
  GET_TOP_MARKERS_START,
  GET_TOP_MARKERS_SUCCESS,
  GET_TOP_MARKERS_FAIL,
  MARKER_ADD_START,
  MARKER_ADD_SUCCESS,
  MARKER_ADD_FAIL,
  SET_ACTIVE_MARKER,
  UNSET_ACTIVE_MARKER,
  SET_CURRENT_PARENT,
  UNSET_CURRENT_PARENT,
  CLEAR_SUBCONTAINERS
} from "./types";
import countries from "../utilities/countries.json";

//Get Top Level Markers
export const getTopLevelMarkers = () => (dispatch, getState) => {
  dispatch({ type: GET_TOP_MARKERS_START });

  axios
    .get("http://localhost:5000/markers", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TOP_MARKERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          GET_TOP_MARKERS_FAIL
        )
      );
      dispatch({
        type: GET_TOP_MARKERS_FAIL
      });
    });
};

//Add Top Level Marker To Map
export const addTopLevelMarker = newMarker => (dispatch, getState) => {
  dispatch({ type: MARKER_ADD_START });

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.common === newMarker.name) {
      newMarker.coordinates = {
        lat: countries[i].latlng[0],
        lng: countries[i].latlng[1]
      };
    }
  }
  const body = JSON.stringify(newMarker);

  axios
    .post("http://localhost:5000/markers/add", body, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: MARKER_ADD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, MARKER_ADD_FAIL)
      );
      dispatch({
        type: MARKER_ADD_FAIL
      });
    });
};

//Set Active Marker
export const setActiveMarker = marker => dispatch => {
  dispatch({
    type: SET_CURRENT_PARENT,
    payload: marker.dbId
  });
  dispatch({
    type: SET_ACTIVE_MARKER,
    payload: marker
  });
};

//Unset Active Marker and Current Parent and Clear Subcontainers
export const unsetActiveMarker = () => dispatch => {
  dispatch({
    type: UNSET_ACTIVE_MARKER
  });
  dispatch({
    type: UNSET_CURRENT_PARENT
  });
  dispatch({
    type: CLEAR_SUBCONTAINERS
  });
};
