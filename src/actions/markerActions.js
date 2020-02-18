import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import { MARKER_ADDED, MARKER_ADD_FAIL } from "./types";

//Add Top Level Marker To Map
export const addMarker = ({ name }) => (dispatch, getState) => {
  const body = JSON.stringify({ name });

  axios
    .post("http://localhost:5000/markers/add", body, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: MARKER_ADDED
      });
    })
    .catch(err => {
        console.log(err);
      dispatch(
        returnErrors(err.response.data, err.response.status, MARKER_ADD_FAIL)
      );
      dispatch({
        type: MARKER_ADD_FAIL
      });
    });
};
