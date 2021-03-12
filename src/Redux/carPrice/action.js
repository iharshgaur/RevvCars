import { GET_CAR_PRICE } from "./actionType";

const getcarPric = (payload) => {
  return {
    type: GET_CAR_PRICE,
    payload,
  };
};

const getcarPrice = (payload) => (dispatch) => {
  dispatch(getcarPric(payload));
};
export { getcarPrice };
