import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
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


const createUserRequest = (payload) => {
  return {
    type: CREATE_USER_REQUEST,
    payload,
  };
};

const createUserSuccess = (payload) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  };
};

const createUserFailure = (payload) => {
  return {
    type: CREATE_USER_FAILURE,
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
          
            dispatch(authUserSuccess(users[i]))
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


const createUser = (payload) => (dispatch) => {
  dispatch(createUserRequest);
  axios
    .post(`http://localhost:1234/users`, payload)
    .then((res) => {
      dispatch(createUserSuccess())
      dispatch(authUserSuccess(res.data))
    })
    .catch((err) => {
      dispatch(createUserFailure(err));
    });
};



export { authUser,logoutUser, createUser };
