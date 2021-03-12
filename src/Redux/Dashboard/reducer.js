import {
    SET_USER_REQUEST
} from "./actionTypes";

const initState = {
    city : "",
    start_date : "",
    end_date : "",
}

const dashboardreducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case SET_USER_REQUEST:
            return {
                ...state,
                city : payload.city,
                start_date : payload.start_date,
                end_date : payload.end_date,
            }
         

        default:
            return {
                ...state,
            }
    }
}

export {
    dashboardreducer
}