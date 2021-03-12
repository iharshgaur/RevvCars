import { GET_CAR_PRICE } from "./actionType";

const initState = {
  price: "",
};

const carPriceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CAR_PRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { carPriceReducer };
