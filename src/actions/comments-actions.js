import commentsService from '../services/comments-service'

export const CREATE_COMMENT = "CREATE_COMMENT"
export const FIND_COMMENTS_FOR_POST = "FIND_COMMENTS_FOR_POST"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const createComment = (dispatch, postId, comment) =>
    commentsService.createComment(postId, comment)
        .then(comment => dispatch({
            type: CREATE_COMMENT,
            postId: postId,
            comment: comment
        }))

export const findCommentsForPost = (dispatch, postId) => {
    commentsService.findCommentsForPost(postId)
        .then(comments => dispatch({
            type: FIND_COMMENTS_FOR_POST,
            postId: postId,
            comments: comments
        }))
}

export const updateComment = (dispatch, postId, comment) => {
    commentsService.updateComment(comment)
        .then(comment => dispatch({
            type: UPDATE_COMMENT,
            postId: postId,
            comment: comment
        }))
}

export const deleteComment = (dispatch, postId, commentId) => {
    commentsService.deleteComment(commentId)
        .then(comment => dispatch({
            type: DELETE_COMMENT,
            postId: postId,
            commentId: commentId
        }))
}

const commentActions = {
    createComment,
    updateComment,
    findCommentsForPost,
    deleteComment
}

export default commentActions