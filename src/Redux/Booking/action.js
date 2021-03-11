import {
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionType";
import axios from "axios";
const getCarRequest = (payload) => {
  return {
    type: GET_CAR_REQUEST,
    payload,
  };
};

const getCarSuccess = (payload) => {
  return {
    type: GET_CAR_SUCCESS,
    payload,
  };
};

const getCarFailure = (payload) => {
  return {
    type: GET_CAR_FAILURE,
    payload,
  };
};

// const getUrl = "http://localhost:1234/rental";
const getCarById = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get(`http://localhost:1234/rental/${payload}`)
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};

export { getCarById };
