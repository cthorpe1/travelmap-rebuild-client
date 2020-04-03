import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";
import {getTopLevelMarkers} from "./markerActions";
import {
    CREATE_SUBCONTAINER_START,
    CREATE_SUBCONTAINER_SUCCESS,
    CREATE_SUBCONTAINER_FAIL,
    GET_SUBCONTAINERS_START,
    GET_SUBCONTAINERS_SUCCESS,
    GET_SUBCONTAINERS_FAIL,
    DELETE_SUBCONTAINER_START,
    DELETE_SUBCONTAINER_SUCCESS,
    DELETE_SUBCONTAINER_FAIL
  } from "./types";

  //Create Subcontainer
export const createSubContainer = newSubContainer => (dispatch, getState) => {
    dispatch({ type: CREATE_SUBCONTAINER_START });
  
    const body = JSON.stringify(newSubContainer);
    axios
      .post(
        "http://localhost:5000/markers/add/sub-container",
        body,
        tokenConfig(getState)
      )
      .then(res => {
        dispatch({
          type: CREATE_SUBCONTAINER_SUCCESS
        });
        dispatch(getTopLevelMarkers());
        dispatch(getSubcontainers(newSubContainer.currentParent));
      })
      .catch(err => {
        dispatch(
          returnErrors(
            err.response.data,
            err.response.status,
            CREATE_SUBCONTAINER_FAIL
          )
        );
        dispatch({
          type: CREATE_SUBCONTAINER_FAIL
        });
      });
  };
  
  export const getSubcontainers = currentParent => (dispatch, getState) => {
    dispatch({ type: GET_SUBCONTAINERS_START });
  
    axios
      .get(
        `http://localhost:5000/markers/${currentParent}`,
        tokenConfig(getState)
      )
      .then(results => {
        dispatch({
          type: GET_SUBCONTAINERS_SUCCESS,
          payload: results.data
        });
      })
      .catch(err => {
        dispatch(
          returnErrors(
            err.response.data,
            err.response.status,
            GET_SUBCONTAINERS_FAIL
          )
        );
        dispatch({
          type: GET_SUBCONTAINERS_FAIL
        });
      });
  };
  
  export const deleteSubcontainer = ({ currentParent, containerToDelete }) => (
    dispatch,
    getState
  ) => {
    dispatch({ type: DELETE_SUBCONTAINER_START });
  
    let body = {
      currentParent,
      containerToDelete
    };
  
    body = JSON.stringify(body);
  
    axios
      .post(
        `http://localhost:5000/markers/${currentParent}/remove-sub`,
        body,
        tokenConfig(getState)
      )
      .then(result => {
        dispatch({ type: DELETE_SUBCONTAINER_SUCCESS });
        dispatch(getSubcontainers(result.data.id));
      })
      .catch(err => console.log(err));
  };
  