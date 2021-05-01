import {PLANTIT_API_URL} from "./node-service";

const createComment = (postId, comment) => {
    console.log(comment)
    return fetch(`${PLANTIT_API_URL}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(response => response.json())
}

const findCommentsForPost = (postId) =>
    fetch(`${PLANTIT_API_URL}/posts/${postId}/comments`)
        .then(response => response.json())

const deleteComment = (commentId) =>
    fetch(`${PLANTIT_API_URL}/comments/${commentId}`,{
        method: 'DELETE'
    }).then(response => response.json())

const updateComment = (comment) =>
    fetch(`${PLANTIT_API_URL}/comments/${comment._id}`, {
        method: 'PUT',
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const api = {
    createComment,
    findCommentsForPost,
    deleteComment,
    updateComment
}

export default api