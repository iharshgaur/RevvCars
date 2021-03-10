import {
    GET_CAR_FAILURE,
    GET_CAR_REQUEST,
    GET_CAR_SUCCESS
} from "./actionType";

const initState = {
    cars: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case GET_CAR_REQUEST:
            return {
                ...state,
                isLoading: false,
                    isError: false
            }
            case GET_CAR_SUCCESS:
                return {
                    ...state,
                    cars: payload,
                        isLoading: true,
                        isError: false
                }
                case GET_CAR_FAILURE:
                    return {
                        ...state,
                        isLoading: false,
                            isError: true
                    }

                    default:
                        return {
                            ...state,
                        }
    }
}

export {
    reducer
}