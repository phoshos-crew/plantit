import {FIND_GROUP_BY_ID} from "../actions/groups-actions";


const initialState = {}

const groupReducer = (state = initialState, action) => {
    switch (action.type) {
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
