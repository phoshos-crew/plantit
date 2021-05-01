import {PLANTIT_API_URL} from "./node-service";

const findPostsForUser = (userId) => {
    return fetch(`${PLANTIT_API_URL}/users/${userId}/posts`)
        .then(response => response.json())
}

const findAllPosts = () => {
    return fetch(`${PLANTIT_API_URL}/posts`)
        .then(response => response.json())
}

const createPost = (post) => {
    return fetch(`${PLANTIT_API_URL}/posts`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(response => response.json())
}

const api = {
    findPostsForUser,
    findAllPosts,
    createPost
}

export default api