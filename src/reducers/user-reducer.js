import {LOGIN, LOGOUT, FIND_USER_BY_ID, PROFILE, REGISTER} from "../actions/user-actions";


const initialState = {
    plants: [
        {id: "551ddaf53938340003580000"},
        {id: "54c7650e6236310003000000"},
        {id: "54bda00e3961370003150400"},
        {id: "544c88bd3432630002000000"}
    ],
    updates: [
        {
            userName: "Sravni",
            action: "NEW_PLANT"
        },
        {
            userName: "Sravni",
            action: "NEW_PICTURE"
        }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
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
        case FIND_USER_BY_ID:
            return {
                ...state,
                profileUser: action.profileUser
            }
        case REGISTER:
            return {
                ...state,
                currentUser: action.currentUser

            }
        default:
            return state
    }
}

export default userReducer
