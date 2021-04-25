import {
    CREATE_COMMENT,
    FIND_COMMENTS_FOR_POST,
    DELETE_COMMENT,
    UPDATE_COMMENT
} from "../actions/comments-actions";

const initialState = {
    comments_by_post: {}
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            return {
                ...state,
                comments_by_post: {
                    ...state.comments_by_post,
                    [action.postId]: [
                        ...state.comments_by_post[action.postId],
                        action.comment
                    ]
                }
            }
        case FIND_COMMENTS_FOR_POST:
            return {
                ...state,
                comments_by_post: {
                    ...state.comments_by_post,
                    [action.postId]: action.comments
                }
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments_by_post: {
                    ...state.comments_by_post,
                    [action.postId]: state.comments_by_post[action.postId].map((comment) => {
                        if(action.comment._id === comment._id) {
                            return action.comment
                        } else {
                            return comment
                        }
                    })
                }
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments_by_post: {
                    ...state.comments_by_post,
                    [action.postId]: state.comments_by_post[action.postId].map((comment) => {
                        if(action.commentId !== comment._id) {
                            return comment
                        }
                    })
                }
            }
        default:
            return state
    }
}

export default commentsReducer