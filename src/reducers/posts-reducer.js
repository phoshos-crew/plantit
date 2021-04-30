import {FIND_POSTS_FOR_USER, CREATE_POST} from "../actions/posts-actions";

const initialState = {
    posts_by_user: {}
}

const postReducer = (state = initialState, action) => {
    // console.log(JSON.stringify(action))
    switch (action.type) {
        case FIND_POSTS_FOR_USER:
            return {
                ...state,
                posts_by_user: {
                    ...state.posts_by_user,
                    [action.poster]: action.posts
                }
            }
        case CREATE_POST:
            return {
                ...state,
                posts_by_user: {
                    ...state.posts_by_user,
                    [action.poster]: [
                        ...state.posts_by_user[action.poster],
                        action.post
                    ]
                }
            }
        default:
            return state
    }
}

export default postReducer