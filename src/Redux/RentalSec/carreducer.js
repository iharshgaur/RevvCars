import {
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionTypes";

const initState = {
  cars: [],
  isLoading: true,
  isError: false,
};

const carreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CAR_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_CAR_SUCCESS:
      return {
        ...state,
        cars: payload,
        isLoading: false,
        isError: false,
      };
    case GET_CAR_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export { carreducer };
