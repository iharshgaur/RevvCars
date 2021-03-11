import { GET_CAR } from "./actionType";

const initState = {
  bookcars: "",
  isLoading: true,
  isError: false,
};

const Bookreducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case GET_CAR_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //   };
    case GET_CAR:
      return {
        ...state,
        bookcars: payload,
        isLoading: false,
        isError: false,
      };
    // case GET_CAR_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isError: true,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export { Bookreducer };
