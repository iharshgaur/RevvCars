import {
    GET_CAR_FAILURE,
    GET_CAR_REQUEST,
    GET_CAR_SUCCESS
} from "./actionType"
import axios from "axios"
const getCarRequest = (payload) => {
    return {
        type: GET_CAR_REQUEST,
        payload
    }
}

const getCarSuccess = (payload) => {
    return {
        type: GET_CAR_SUCCESS,
        payload
    }
}

const getCarFailure = (payload) => {
    return {
        type: GET_CAR_FAILURE,
        payload
    }
}

const getCar = (payload) => (dispatch) => {
    dispatch(getCarRequest);
    axios.get("")
        .then(res => dispatch(getCarSuccess(res.data[0])))
        .catch(err => {
            dispatch(getCarFailure(err))
        })
}

export {
    getCar
}