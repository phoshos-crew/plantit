import {FIND_POSTS_FOR_USER} from "../actions/posts-actions";

const initialState = {
    posts_by_user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_POSTS_FOR_USER:
            return {
                ...state,
                posts_by_user: {
                    ...state.posts_by_user,
                    [action.poster]: action.posts
                }
            }
        default:
            return state
    }
}

export default userReducer