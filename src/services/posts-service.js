import {PLANTIT_API_URL} from "./user-service";

const findPostsForUser = (userId) => {
    return fetch(`${PLANTIT_API_URL}/users/${userId}/posts`)
        .then(response => response.json())
}

const findAllPosts = () => {
    return fetch(`${PLANTIT_API_URL}/posts`)
        .then(response => response.json())
}

const api = {
    findPostsForUser,
    findAllPosts
}

export default api