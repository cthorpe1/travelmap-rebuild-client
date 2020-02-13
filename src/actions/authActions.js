import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/users/verify", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ name, email, password }) => dispatch => {
  // Request body
  const body = JSON.stringify({ name, email, password });

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .post("http://localhost:5000/users/register", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Request body
  const body = JSON.stringify({ email, password });

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .post("http://localhost:5000/users/login", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//Setup Headers and Token
export const tokenConfig = getState => {
  //get token from localStorage
  const token = getState().auth.token;

  //Headers
  let headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers["x-auth-token"] = token;
  }
  return headers;
};
