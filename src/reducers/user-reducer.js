import {LOGIN, LOGOUT, PROFILE} from "../actions/user-actions";

const initialState = {
    plants: [
        {id: "551ddaf53938340003580000"},
        {id: "54c7650e6236310003000000"},
        {id: "54bda00e3961370003150400"},
        {id: "544c88bd3432630002000000"}
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case PROFILE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {}
            }
        default:
            return state
    }
}

export default userReducer