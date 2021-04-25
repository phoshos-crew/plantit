import {PLANTIT_API_URL} from "./user-service";

const findPostsForUser = (userId) => {
    return fetch(`${PLANTIT_API_URL}/users/${userId}/posts`)
        .then(response => response.json())
}

const api = {
    findPostsForUser
}

export default api