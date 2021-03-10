import {
    SET_USER_REQUEST
} from "./actionTypes"


const setUserRequest = (payload) => {

    return {
        type: SET_USER_REQUEST,
        payload
    }
}


export {
    setUserRequest
}