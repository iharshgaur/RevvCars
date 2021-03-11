import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  USER_LOGOUT
} from "./actionType";


import axios from "axios";
const authUserRequest = (payload) => {
  return {
    type: AUTH_USER_REQUEST,
    payload,
  };
};

const authUserSuccess = (payload) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload,
  };
};

const authUserFailure = (payload) => {
  return {
    type: AUTH_USER_FAILURE,
    payload,
  };
};
 const logoutUser = () =>{
  return {
    type: USER_LOGOUT,
  };
}


const authUser = (payload) => (dispatch) => {
  dispatch(authUserRequest);
  axios
    .get(`http://localhost:1234/users`)
    .then((res) => {
      const users = res.data;
      let flag = true;

      for(let i = 0; i < users.length; i++){
        if(users[i].email === payload.email){
          if(users[i].password === payload.password){
            flag = false;
            dispatch(authUserSuccess())
            break;
          }
        }
      }


      if(flag){
        dispatch(authUserFailure("wrong username or password"));
      }


    })
    .catch((err) => {
      dispatch(authUserFailure(err));
    });
};



export { authUser,logoutUser };
