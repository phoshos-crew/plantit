import {FIND_GROUP_BY_ID, PROFILE} from "../actions/groups-actions";


const initialState = {}

const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                currentGroup: action.currentGroup
            }
        case FIND_GROUP_BY_ID:
            return {
                ...state,
                foundGroup: action.foundGroup
            }
        default:
            return state
    }
}

export default groupReducer
