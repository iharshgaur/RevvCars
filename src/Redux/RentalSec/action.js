import {
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionTypes";
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

const getCar = (payload) => (dispatch) => {
  console.log("payload", payload);
  dispatch(getCarRequest);
  axios
    .get(`https://revv-cars.herokuapp.com/rental`)
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
//get the car by hatch
const getCarHatch = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/hatch")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarSedan = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/sedan")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarSuv = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/suv")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarMuv = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/muv")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarHatchSedan = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/hatch&sedan")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarHatchSuv = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/hatch&suv")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarSedanSuv = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/sedan&suv")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
//for the petrol
const getCarPetrol = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/petrol")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarDiesel = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/diesel")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarAutomatic = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/automatic")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarManual = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/manual")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarFSeats = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/FSeat")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarSSeats = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/SSeat")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarBrand = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/Toyota")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarBrandMaruti = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/Maruti")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarBrandMahindara = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/Mahindara")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarBrandHyundai = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/Hyundai")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
const getCarBrandHonda = (payload) => (dispatch) => {
  dispatch(getCarRequest);
  axios
    .get("https://revv-cars.herokuapp.com/rentalCar/Honda")
    .then((res) => dispatch(getCarSuccess(res.data)))
    .catch((err) => {
      dispatch(getCarFailure(err));
    });
};
export {
  getCar,
  getCarHatch,
  getCarSedan,
  getCarSuv,
  getCarMuv,
  getCarHatchSedan,
  getCarHatchSuv,
  getCarSedanSuv,
  getCarPetrol,
  getCarDiesel,
  getCarManual,
  getCarAutomatic,
  getCarSSeats,
  getCarFSeats,
  getCarBrand,
  getCarBrandMaruti,
  getCarBrandMahindara,
  getCarBrandHyundai,
  getCarBrandHonda,
};
