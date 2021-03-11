import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
} from "./actionType";

const initState = {
  isAuth : false,
  error: "",
  isError : false,
};

const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuth : true,
        error : "",
        isError: false,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        error : payload,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export { AuthReducer };
