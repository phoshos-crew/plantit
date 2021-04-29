const initial_state = { cropUsers: null}

const cropReducer = (state = initial_state, action) => {
    switch(action.type) {
        case "FIND_ALL_CROP_USERS":
            return {
                ...state,
                cropUsers: action.cropUsers
            }
        default:
            return state
    }
}

export default cropReducer